import styles from "./style.module.css";
import facebookIcon from "../../assets/images/facebook.svg";
import instIcon from "../../assets/images/inst.svg";

export function Footer() {
  return (
    <section className={styles.main}>
      <div className={styles.header}>
        <h2>Join us with Affiliate program</h2>
      </div>

      <form>
        <div>
          <input type="email" placeholder="Type your email adress here" />
        </div>
        <button>Submit now</button>
      </form>

      <div className={styles.grid}>
        <div className={styles.socials}>
          Follow on social
          <div className={styles.links}>
            <a href="#" className={styles.facebook}>
              <img src={facebookIcon} />
            </a>
            <a href="#" className={styles.inst}>
              <img src={instIcon} />
            </a>
          </div>
        </div>
        <div className={styles.contacts}>
          <div>
            Boarding & Day care
            <div className={styles.number}>(616)-459-8622</div>
            <p>2125 Howard Street ,Grand Rapids, MI Michigan</p>
          </div>

          <div>
            Health care
            <div className={styles.number}>(616)-566-5896</div>
            <p>2125 Howard Street ,Grand Rapids, MI Michigan</p>
          </div>
        </div>
      </div>

      <nav>
        <p className={styles.copyright}>
          © all rights reserved & design with love by bharat
        </p>
        <div className={styles.links}>
          <a href="#">our services</a>
          <a href="#">About us</a>
          <a href="#">Shipping</a>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    </section>
  );
}
