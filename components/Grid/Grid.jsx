import styles from './Grid.module.scss'
import buttonStyles from 'components/Button/Button.module.css'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

import Button from 'components/Button'
import Cell from 'components/Cell'
import GameOverText from 'components/GameOverText'

import useGameParameters from 'hooks/useGameParameters'
import {GRID} from 'constants/variables'
import {cx, flatten, getCoordinates, playAI} from 'constants/utils'


export default function Grid({type}){
    const [isYourTurn, setIsYourTurn] = useState(true)
    const [recentPlay, setRecentPlay] = useState(null)
    const [gameBoard, setGameBoard] = useState(GRID[type])

    const [isGameOver, isPlayerOneWinner] = useGameParameters(type, gameBoard, recentPlay)
    const router = useRouter()

    useEffect(opponentPlay, [isYourTurn, isGameOver])

    const xstyles = cx([
        styles.board,
        styles[type],
        isGameOver ? styles.dim : '',
    ])
    return (
        <section className={styles.container}>
            <GameOverText
                isGameOver={isGameOver}
                isPlayerOneWinner={isPlayerOneWinner}
            />
            <div className={xstyles}>
                {flatten(gameBoard).map((value, i) =>
                    <Cell
                        key={`${value}-${i}`}
                        value={value}
                        type={type}
                        coordinates={getCoordinates(i, type)}
                        handleClick={handleCellClick}
                    />
                )}
            </div>
            <Button
                value="Restart Game"
                disabled={!Boolean(recentPlay)} // disabled if board is still empty
                onClick={resetBoard}
                xstyles={[buttonStyles.restart]}
            />
        </section>
    )

    function handleCellClick(coordinates) {
        const [x, y] = coordinates
        if (gameBoard[x][y] !== 0) return // cell was already played
        if (isGameOver) return

        const updated = [...gameBoard]
        updated[x][y] = isYourTurn ? 1 : 2;

        setGameBoard(updated)
        setRecentPlay(coordinates)
        setIsYourTurn(!isYourTurn)
    }

    function resetBoard(){
        router.reload()
    }

    function opponentPlay() {
        if (!isYourTurn && !isGameOver) {
            setGameBoard(playAI(gameBoard))
            setIsYourTurn(true)
        }
    }
}
