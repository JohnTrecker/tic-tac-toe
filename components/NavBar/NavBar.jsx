import styles from './NavBar.module.css';
import {DEFAULT_NAME, MEGA_NAME} from 'constants/variables'
import NavButton from 'components/NavButton';
import Divider from 'components/Divider';

export default function NavBar() {
    return (
        <>
            <nav className={styles.navbar}>
                <NavButton route={DEFAULT_NAME}/>
                <NavButton route={MEGA_NAME}/>
            </nav>
            <Divider/>
        </>
    )
}
