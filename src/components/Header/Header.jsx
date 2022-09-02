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
                <div className={styles.sign}>
                    <button>Sign in</button>
                </div>
                <div className={styles.register}>
                    <button>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Header