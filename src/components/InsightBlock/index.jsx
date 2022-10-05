import styles from "./style.module.css";
import { Button } from "../reusableTemplates/button/index";

export function InsightBlock() {
  return (
    <section className={styles.main}>
      <div className={styles.description}>
        <h2>
          No one appreciates the very
          <br /> special genius of your
          <br /> conversation as the dog does.
        </h2>
        <p>
          Sweet roll ice cream powder candy canes ice cream
          <br /> donut pudding biscuit ice cream.biscuit caramels topb
        </p>
        <div className={styles.link}>
          <Button tag="a" text="Explore more" />
        </div>
      </div>
    </section>
  );
}
