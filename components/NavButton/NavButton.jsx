import styles from './NavButton.module.css'
import Button from 'components/Button'
import { useRouter } from 'next/router'

export default function NavButton({value, route}){
    const router = useRouter()
    const isSelected = router.route === `/${route}`

    const navStyles = isSelected
        ? [styles.navbutton, styles.selected] // TODO: implement styles.isClicked logic
        : [styles.navbutton]

    return (
        <Button route={route} xstyles={navStyles}/>
    )
}
