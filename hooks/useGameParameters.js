import {useEffect, useState} from 'react';
import {GRID, VALIDATE} from 'constants/variables';

/**
 * returns a tuple of booleans that answer "is the game over?" and "is player one the winner?"
 *
 * @param {string} type - grid type, e.g. tic-tac-toe or mega-tic-tac-toe
 * @param {number[][]} grid - current grid state
 * @returns {boolean[]} [<game over?>, <did player one win?>]
 */
export default function useGameParameters(type, grid, lastPlay){
    let [isGameOver, setIsGameOver] = useState(false);
    let [isPlayerOneWinner, setIsPlayerOneWinner] = useState(false);

    let validate = VALIDATE[type];

    useEffect(() => {
        const result = validate(grid, lastPlay)
        if (!!result) {
            setIsGameOver(true)
            setIsPlayerOneWinner(result === 1)
        }
    }, [grid, validate, lastPlay])

    return [isGameOver, isPlayerOneWinner]
}
