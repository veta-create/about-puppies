import styles from './style.module.css'

export function Button(props) {
  return <div className={styles.main}>{props.tag === "a" ?
  <a>
    {props.text}
  </a> :
  <button>
    {props.text}
  </button>
  }
  </div>;
}
