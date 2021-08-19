import styles from './Button.module.css'
import { useRouter } from 'next/router'
import { cx } from 'constants/utils'


export default function Button({value, route, onClick, disabled, xstyles}){
    const router = useRouter()

    // styling
    const buttonStyles = [
        ...xstyles,
        disabled ? styles.disabled : ''
    ]

    // click-handling
    const defaultHandler = () => router.push(route)
    const clickHandler = onClick ?? defaultHandler

    return (
        <input
            type="button"
            value={value ?? route}
            disabled={disabled}
            className={cx(buttonStyles)}
            onClick={clickHandler}
        />
    )
}
