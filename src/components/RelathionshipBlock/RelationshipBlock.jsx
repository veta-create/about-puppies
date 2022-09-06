import styles from './Relationship.module.css'
import arrow from '../../assets/images/arrow.png'

export function RelationshipBlock () {
    return (
        <div className={styles.main}>
            <div className={styles.description}>
                <h1>Taking care<br /> for you Smart Dog !</h1>
                <p>Human-canine bonding is the relationship<br /> between dogs and humans</p>
                <button>Explore more</button>
            </div>
        </div>
    )
}