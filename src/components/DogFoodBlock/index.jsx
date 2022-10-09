import styles from "./style.module.css";
import { Button } from "../reusableTemplates/button/index";
import { FoodElement } from "./FoodElement";

export function DogFoodBlock(props) {

  return (
    <section className={styles.main}>
      <a name="products"></a>
      <div className={styles.header}>
        <h2>Dog Nutrients & Food </h2>
      </div>
      <div className={styles.discount}>
        <div className={styles.offer}>
          <a href="#">
            <span>25 % OFF ALL</span> Products
          </a>
        </div>
        <div className={styles.view}>
          <Button tag="a" text="View more" />
        </div>
      </div>
      <div className={styles.products}>
        <ul>
          {props.dogFoodPage.foodData.map((e) => {
            return <FoodElement key={e.id} productImg={e.productImg} name={e.name} text={e.text} />;
          })}
        </ul>
      </div>
    </section>
  );
}
