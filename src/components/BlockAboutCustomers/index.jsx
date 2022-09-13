import styles from "./style.module.css";

export function BlockAboutCustomers() {
  return (
    <section className={styles.main}>
      <div className={styles.header}>
        <h2>Happy Customer</h2>
      </div>
      <ul>
        <li className={styles.card}>
          <div className={styles.card}>
            <div className={styles.img}>
              <img />
            </div>
            <div className={styles.rating}>
              <div className={styles.names}></div>
              <p></p>
              <div className={styles.bones}>
                <ul>
                  <li className={styles.bone}></li>
                  <li className={styles.bone}></li>
                  <li className={styles.bone}></li>
                  <li className={styles.bone}></li>
                  <li className={styles.bone}></li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li className={styles.card}>
          <div className={styles.card}>
            <div className={styles.img}>
              <img />
            </div>
            <div className={styles.rating}>
              <div className={styles.names}></div>
              <p></p>
              <div className={styles.bones}>
                <ul>
                  <li className={styles.bone}></li>
                  <li className={styles.bone}></li>
                  <li className={styles.bone}></li>
                  <li className={styles.bone}></li>
                  <li className={styles.bone}></li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li className={styles.card}>
          <div className={styles.card}>
            <div className={styles.img}>
              <img />
            </div>
            <div className={styles.rating}>
              <div className={styles.names}></div>
              <p></p>
              <div className={styles.bones}>
                <ul>
                  <li className={styles.bone}></li>
                  <li className={styles.bone}></li>
                  <li className={styles.bone}></li>
                  <li className={styles.bone}></li>
                  <li className={styles.bone}></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
