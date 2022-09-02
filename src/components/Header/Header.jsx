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
                    <a href="#">OUR SERVICES</a>
                    <a href="#">ABOUT US</a>
                    <a href="#">PRODUCTS</a>
                    <a href="#">PET CARE</a>
                    <a href="#">CONTACT</a>
                </nav>
            </div>
            <div className={styles.auth}>
                <div className={styles.sign}>
                    <button>SIGN IN</button>
                </div>
                <div className={styles.register}>
                    <button>REGISTER</button>
                </div>
            </div>
        </div>
    )
}

export default Header