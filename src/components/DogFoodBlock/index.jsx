import styles from "./style.module.css";
import food1 from "../../assets/images/food1.png";
import food2 from "../../assets/images/food2.png";
import food3 from "../../assets/images/food3.png";

export function DogFoodBlock() {
  return (
    <section className={styles.main}>
      <div className={styles.header}>
        <h2>Dog Nutrients & Food </h2>
      </div>
      <div className={styles.discount}>
        <div>
          <a href="#">
            <span>25 % OFF ALL</span> Products
          </a>
        </div>
        <button className={styles.view}>View More</button>
      </div>
      <div className={styles.products}>
        <ul>
          <li>
            <div className={styles.card}>
              <img alt="food" src={food1} />
              <a href="#">Drools|3KG</a>
              <p>Adult chicken and egg Egg,<br /> Chicken 3 kg Dry Adult Dog<br /> Food</p>
              <button>Buy Now</button>
            </div>
          </li>

          <li>
            <div className={styles.card}>
              <img alt="food" src={food2} />
              <a href="#">Canine Greek 4KG</a>
              <p>Adult chicken and egg Egg,<br /> Chicken 3 kg Dry Adult Dog<br /> Food</p>
              <button>Buy Now</button>
            </div>
          </li>

          <li>
            <div className={styles.card}>
              <img alt="food" src={food3} />
              <a href="#">Biscork Biscuits</a>
              <p>Adult chicken and egg Egg,<br /> Chicken Dry Adult Dog<br /> Food</p>
              <button>Buy Now</button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
