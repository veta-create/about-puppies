import styles from "./style.module.css";
import { Button } from "../reusableTemplates/button/index";

export function RelationshipBlock() {
  return (
    <section className={styles.main}>
      <div className={styles.relationship}>
        <div className={styles.description}>
          <h1>
            Taking care
            <br /> for you Smart Dog !
          </h1>
          <p>
            Human-canine bonding is the relationship
            <br /> between dogs and humans
          </p>
          <div className={styles.link}>
            <Button tag="a" text="Explore more" />
          </div>
        </div>
      </div>

      <div className={styles.services}>
        <div className={styles.header}>
          <h1>Services Category</h1>
        </div>
        <div className={styles.navContainer}>
          <nav>
            <div className={styles.grooming}>
              <a href="#">Grooming</a>
            </div>
            <div className={styles.healthcare}>
              <a href="#">Healthcare</a>
            </div>
            <div className={styles.daycare}>
              <a href="#">Daycare</a>
            </div>
            <div className={styles.training}>
              <a href="#">Training</a>
            </div>
            <div className={styles.hyginic}>
              <a href="#">Hyginic care</a>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
