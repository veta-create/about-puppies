import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";
import burger from "../../assets/images/hamburger.png";

function Header() {
  return (
    <section className={styles.header}>
      <div className={styles.navigationBurger}>
        <img src={burger} alt="hamburger" />
        <nav>
          <ul>
            <li>
              <a href="#">Our services</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Pet care</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.logo}>
        <img alt="logo" src={logo}></img>
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
    </section>
  );
}

export default Header;
