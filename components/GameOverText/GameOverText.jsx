import styles from './GameOverText.module.css'

export default function GameOverText({
    isGameOver,
    isPlayerOneWinner
}){
    return isGameOver && (
        <div className={styles.text}>
            {isPlayerOneWinner
                ? '🎉\nYou Win!'
                : '🙁\nYou Lost'
            }
        </div>
    )
}
