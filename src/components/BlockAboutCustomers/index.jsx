import styles from "./style.module.css";
import { Button } from "../reusableTemplates/button";
import { Customer } from "./Customer/Customer";
import customer1 from "../../assets/images/customer1.png";
import customer2 from "../../assets/images/customer2.png";
import customer3 from "../../assets/images/customer3.png";

let ratingCalc = (rating) => {
  if (rating < 0.5) {
    return [false, false, false, false, false];
  } else if (rating >= 0.5 && rating < 1.5) {
    return [true, false, false, false, false];
  } else if (rating >= 1.5 && rating < 2.5) {
    return [true, true, false, false, false];
  } else if (rating >= 2.5 && rating < 3.5) {
    return [true, true, true, false, false];
  } else if (rating >= 3.5 && rating < 4.5) {
    return [true, true, true, true, false];
  } else {
    return [true, true, true, true, true];
  }
};

let customersData = [
  {
    id: 1,
    customerImage: customer1,
    names: "Anna & Tobby",
    text: "Amazing Products & Delivery on time.",
    rating: 4.2,
    ratingBones: ratingCalc(4.2),
    background: styles.yellowBackground,
  },
  {
    id: 2,
    customerImage: customer2,
    names: "Christine & Tom",
    text: "Love the overall Shopping experience!",
    rating: 2.5,
    ratingBones: ratingCalc(2.5),
    background: styles.pinkBackground,
  },
  {
    id: 3,
    customerImage: customer3,
    names: "Sindy & Kitch",
    text: "Kitch is love food from the pup-hub",
    rating: 3.9,
    ratingBones: ratingCalc(3.9),
    background: styles.violetBackground,
  },
];

export function BlockAboutCustomers(props) {
  return (
    <section className={styles.main}>
      <a name="customers"></a>
      <div className={styles.header}>
        <h2>Happy Customer</h2>
      </div>
      <ul className={styles.cards}>
<<<<<<< HEAD
        <li className={styles.customerCard}>
          <div className={styles.customerCard}>
            <div className={styles.customerImage}>
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

        <li className={styles.customerCard}>
          <div className={styles.customerCard}>
            <div className={styles.customerImage}>
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
                    <img src={bone} />
                  </li>
                </ul>
                <div className={styles.value}>4.2/5</div>
              </div>
            </div>
          </div>
        </li>

        <li className={styles.customerCard}>
          <div className={styles.customerCard}>
            <div className={styles.customerImage}>
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
                    <img src={bone} />
                  </li>
                </ul>
                <div className={styles.value}>4.2/5</div>
              </div>
            </div>
          </div>
        </li>
=======
        {customersData.map((e) => {
          return (
            <Customer
              key={e.id}
              background={e.background}
              customerImage={e.customerImage}
              names={e.names}
              text={e.text}
              rating={e.rating}
              ratingBones={e.ratingBones}
            />
          );
        })}
>>>>>>> ead00950adeb6a0e595e89315d6b22d56e3ea802
      </ul>
      <Button tag="a" text="Explore more" />
    </section>
  );
}
