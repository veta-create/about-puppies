import styles from "./Customer.module.css";
import fullBone from "../../../assets/images/full-bone.svg";
import bone from "../../../assets/images/bone.svg";

export function Customer(props) {
  return (
    <li className={styles.customerCard}>
      <div className={styles.customerCard}>
        <div className={styles.customerImage + " " + props.background}>
          <img alt="customer" src={props.customerImage} />
        </div>
        <div className={styles.rating}>
          <div className={styles.names}>{props.names}</div>
          <p>{props.text}</p>
          <div className={styles.bones}>
            <ul>
              {props.ratingBones.map((e) => {
                return e === true ? (
                  <li className={styles.bone}>
                    <img alt="full bone" src={fullBone} />
                  </li>
                ) : (
                  <li className={styles.bone}>
                    <img alt="bone" src={bone} />
                  </li>
                );
              })}
            </ul>
            <div className={styles.value}>{props.rating}/5</div>
          </div>
        </div>
      </div>
    </li>
  );
}
