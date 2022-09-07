import styles from './Header.module.css'
import logo from '../../assets/images/logo.png'

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <div><img alt='logo' src={logo}></img></div>
            </div>
            <div className={styles.navigation}>
                <nav>
                    <a href="#">Our services</a>
                    <a href="#">About us</a>
                    <a href="#">Products</a>
                    <a href="#">Pet care</a>
                    <a href="#">Contact</a>
                </nav>
            </div>
            <div className={styles.auth}>
                <button className={styles.sign}>Sign in</button>
                <button className={styles.register}>Register</button>
            </div>
        </div>
    )
}

export default Header