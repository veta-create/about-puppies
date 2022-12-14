import { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";

function Header(props) {
  const [burgerState, switchBurgerState] = useState(false);

  const handleHamburgerMenuChange = () => {
    let body = document.querySelector("body");
    body.classList.toggle("rewind-block")
  };

  return (
    <section className={styles.header}>
      <div className={styles.navigationBurger}>
        <div
          className={styles.hamburgerMenu}
          onClick={() => {
            switchBurgerState(burgerState ? false : true);
            handleHamburgerMenuChange();
          }}
        >
          <div className={burgerState ? styles.change1 : ""}></div>
          <div className={burgerState ? styles.change2 : ""}></div>
          <div className={burgerState ? styles.change3 : ""}></div>
        </div>
        <nav className={burgerState ? styles.burgerActive : styles.burgerHide}>
          <ul>
            <li className={styles.link}>
              <a href="#services">Our services</a>
            </li>
            <li className={styles.link}>
              <a href="#aboutUs">About us</a>
            </li>
            <li className={styles.link}>
              <a href="#products">Products</a>
            </li>
            <li className={styles.link}>
              <a href="#customers">Pet care</a>
            </li>
            <li className={styles.link}>
              <a href="#contacts">Contacts</a>
            </li>
            <li className={styles.link}>
              <a href="#">Sign in</a>
            </li>
            <li className={styles.link}>
              <a href="#">Register</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.logo}>
        <img alt="logo" src={logo}></img>
      </div>
      <div className={styles.navigation}>
        <a name="services"></a>
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
