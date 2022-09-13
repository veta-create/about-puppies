import styles from "./style.module.css";
import customer1 from "../../assets/images/customer1.png";
import customer2 from "../../assets/images/customer2.png";
import customer3 from "../../assets/images/customer3.png";
import fullBone from "../../assets/images/full-bone.svg";
import bone from "../../assets/images/bone.svg";

export function BlockAboutCustomers() {
  return (
    <section className={styles.main}>
      <div className={styles.header}>
        <h2>Happy Customer</h2>
      </div>
      <ul className={styles.cards}>
        <li className={styles.card}>
          <div className={styles.card}>
            <div className={styles.img}>
              <img src={customer1} />
            </div>
            <div className={styles.rating}>
              <div className={styles.names}>Anna & Tobby</div>
              <p>Amazing Products & Delivery on time.</p>
              <div className={styles.bones}>
                <ul>
                  <li className={styles.bone}>
                    <img src={fullBone} />
                  </li>
                  <li className={styles.bone}>
                    <img src={fullBone} />
                  </li>
                  <li className={styles.bone}>
                    <img src={fullBone} />
                  </li>
                  <li className={styles.bone}>
                    <img src={fullBone} />
                  </li>
                  <li className={styles.bone}>
                    <img src={bone} />
                  </li>
                </ul>
                <div className={styles.value}>4.2/5</div>
              </div>
            </div>
          </div>
        </li>

        <li className={styles.card}>
          <div className={styles.card}>
            <div className={styles.img}>
              <img src={customer2} />
            </div>
            <div className={styles.rating}>
              <div className={styles.names}>Christine & Tom</div>
              <p>Love the overall Shopping experience!</p>
              <div className={styles.bones}>
                <ul>
                  <li className={styles.bone}>
                    <img src={fullBone} />
                  </li>
                  <li className={styles.bone}>
                    <img src={fullBone} />
                  </li>
                  <li className={styles.bone}>
                    <img src={fullBone} />
                  </li>
                  <li className={styles.bone}>
                    <img src={fullBone} />
                  </li>
                  <li className={styles.bone}>
                    <img src={fullBone} />
                  </li>
                </ul>
                <div className={styles.value}>4.2/5</div>
              </div>
            </div>
          </div>
        </li>

        <li className={styles.card}>
          <div className={styles.card}>
            <div className={styles.img}>
              <img src={customer3} />
            </div>
            <div className={styles.rating}>
              <div className={styles.names}>Sindy & Kitch</div>
              <p>Kitch is love food from the pup-hub</p>
              <div className={styles.bones}>
                <ul>
                  <li className={styles.bone}>
                    <img src={fullBone} />
                  </li>
                  <li className={styles.bone}>
                    <img src={fullBone} />
                  </li>
                  <li className={styles.bone}>
                    <img src={fullBone} />
                  </li>
                  <li className={styles.bone}>
                    <img src={fullBone} />
                  </li>
                  <li className={styles.bone}>
                    <img src={fullBone} />
                  </li>
                </ul>
                <div className={styles.value}>4.2/5</div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <a href="#">Explore more</a>
    </section>
  );
}
