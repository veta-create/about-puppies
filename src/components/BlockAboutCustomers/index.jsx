import styles from "./style.module.css";
import { Button } from "../reusableTemplates/button";
import { Customer } from "./Customer/Customer";

export function BlockAboutCustomers(props) {
  return (
    <section className={styles.main}>
      <a name="customers"></a>
      <div className={styles.header}>
        <h2>Happy Customer</h2>
      </div>
      <ul className={styles.cards}>
        {props.customersPage.customersData.map((e) => {
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
      </ul>
      <Button tag="a" text="Explore more" />
    </section>
  );
}
