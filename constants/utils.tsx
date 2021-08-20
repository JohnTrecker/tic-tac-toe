import { useRouter } from 'next/router'
import {DEFAULT_GRID_SIZE, DEFAULT_NAME, GRID, MEGA_NAME} from './variables'


/**
 * GAME BOARD UTILITY FUNCTIONS
 */

/**
 * Return a grid
 *
 * @param rows {number} number of rows
 * @param columns {number} number of columns
 * @returns {number[][]}
 */
export function generateGrid(rows: number, columns: number): number[][]{
    return Array(rows)
        .fill(0)
        .map(() => Array(columns).fill(0))
}

/**
 * Return a tic-tac-toe grid
 *
 * @param size {number} number of rows/columns
 * @returns {number[][]}
 */
export function newTicTacToeGrid(size: number): number[][]{
    return generateGrid(size, size)
}

/**
 * Flatten an array
 *
 * @param {number[][] | number[]} nestedArray - a tic-tac-toe board
 * @returns {number[]}
 */
export function flatten(nestedArray: number[][]): number[] {
    return nestedArray.reduce((memo, curr) => {
        if (Array.isArray(curr)) return [...memo, ...curr]
        return [...memo, curr]
    }, [])
}

/**
 * Check for winning 3-in-a-row pattern (e.g. horizontally, vertically, diagonally)
 *
 * @param {number[][]} board - represenation of the tic-tac-toe board
 * @returns {number} - corresponding to winner: 0 if none, 1 if playerOne, 2 if playerThree
 */
export function validateDefault(board: number[][]): number{
    const [
        a,b,c,
        d,e,f,
        g,h,i,
    ] = flatten(board);

    const winningCombo = [
        [a,b,c], // horizontals
        [d,e,f],
        [g,h,i],

        [a,d,g], // verticals
        [b,e,h],
        [c,f,i],

        [a,e,i], // diagonals
        [c,e,g]
    ].find(combination => isThreeInARow(combination))

    return winningCombo ? winningCombo[0] : 0
}

/**
 * Check for winning 4-in-a-row pattern (e.g. horizontally, vertically)
 *
 * @param {number[][]} board - represenation of the mega tic-tac-toe board
 * @param {number[] | null} lastPlay - specific space on the board (e.g. [1,2] means grid[1][2])
 * @returns {number} - corresponding to winner: 0 if none, 1 if playerOne, 2 if playerThree
 */
export function validateMega(board: number[][], lastPlay: number[] | null): number{
    if (lastPlay == null) return 0
    const [x, y] = lastPlay;
    const play = board[x][y]
    const row = [...board[x]] // entire row of selected square
    const col = board.map(value => value[y]) // entire column of selected square

    const isValidRow = isFourInARow(row, play)
    const isValidCol = isFourInARow(col, play)

    return (isValidRow || isValidCol) ? play : 0;
}

/**
 * Check if 3 plays are from the same player
 *
 * @param {number[]} combo - 0 = unplayed, 1 = Player 1, 2 = Player 2
 * @returns {boolean}
 */
function isThreeInARow(combo: number[]): boolean {
    if (combo.includes(0)) return false;
    const [a,b,c] = combo
    return a === b && b === c;
}

/**
 * Check if 4 plays are from the same player
 *
 * @param {number[]} rowOrColumn - an entire row or column in a mega board
 * @param {number} value - 0 = unplayed, 1 = Player 1, 2 = Player 2
 * @returns {boolean}
 */
function isFourInARow(rowOrColumn: number[], value: number): boolean {
    return rowOrColumn
        .join('')
        .includes(
            value
                .toString()
                .repeat(4)
        )
}

/**
 * Get original coordinates of from nested array given an index from the flattened array
 *
 * @param {number} index of flattened array
 * @param {string} type of tic-tac-toe grid (e.g. tic-tac-toe, mega-tic-tac-toe)
 * @returns {number[]} coordinates of original unflattened grid
 */
export function getCoordinates(index: number, type: string): number[] {
    const size = GRID[type].length
    const row = Math.floor(index / size)
	const col = index % size
	return [row, col]
}

/**
 * Simulate a computer's play
 *
 * @param {number[][]} board - the game board
 * @returns {number[][]} new game board after random play
 */
export function playAI(board: number[][]): number[][] {
    // identify available plays (spaces where value is 0)
    const availablePlays =
        [...board.flat().entries()]
            .reduce((plays, tuple) => {
                if (tuple[1] === 0) return [...plays, tuple[0]]
                return plays;
            }, []);

    if (availablePlays.length === 0) return board

    // choose one at random
    const randomPlay = availablePlays[
        Math.floor(Math.random() * availablePlays.length)
    ]

    // generate new board that includes chosen play
    const boardType = board.length === DEFAULT_GRID_SIZE
        ? DEFAULT_NAME
        : MEGA_NAME;
    const [x,y] = getCoordinates(randomPlay, boardType)

    const updated = [...board]
    updated[x][y] = 2 // Player 2

    // return new board
    return updated
}



/**
 * GENERAL UTILITY FUNCTIONS
 */

/**
 * return a concatinated string of CSS classes
 *
 * @param {string[]} classNames
 * @returns {string} string of classes
 */
export function cx(classNames: string[]): string{
    return classNames.join(' ');
}

/**
 * get current board type
 *
 * @returns {string} board type
 */
export function getBoardType(): string{
    const router = useRouter()
    return router.route.slice(1) // remove / prefix
}
