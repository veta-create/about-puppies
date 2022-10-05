import styles from "./style.module.css";
import food1 from "../../assets/images/food1.png";
import food2 from "../../assets/images/food2.png";
import food3 from "../../assets/images/food3.png";
import { Button } from "../reusableTemplates/button/index";
import { FoodElement } from "./FoodElement";

export function DogFoodBlock() {
  const foodData = [
    {
      id: 1,
      productImg: food1,
      name: "Drools|3KG",
      text: "Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food",
    },
    {
      id: 2,
      productImg: food2,
      name: "Canine Greek 4KG",
      text: "Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food",
    },
    {
      id: 3,
      productImg: food3,
      name: "Biscork Biscuits",
      text: "Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food",
    },
  ];
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
          {foodData.map((e) => {
            return <FoodElement key={e.id} productImg={e.productImg} name={e.name} text={e.text} />;
          })}
        </ul>
      </div>
    </section>
  );
}
