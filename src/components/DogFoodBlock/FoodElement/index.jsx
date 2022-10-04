import styles from "./style.module.css";

export function FoodElement(props) {
  return (
    <li>
      <div className={styles.card}>
        <img alt="food" src={props.productImg} />
        <a href="#">{props.name}</a>
        <p>{props.text}</p>
        <button>Buy Now</button>
      </div>
    </li>
  );
}
