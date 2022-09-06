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

            <div className={styles.services}>
                <div className={styles.header}><h1>Services Category</h1></div>
                <div className={styles.navContainer}>
                    <nav>
                        <div className={styles.grooming}><a href="#">Grooming</a></div>
                        <div className={styles.healthcare}><a href="#">Healthcare</a></div>
                        <div className={styles.daycare}><a href="#">Daycare</a></div>
                        <div className={styles.training}><a href="#">Training</a></div>
                        <div className={styles.hyginic}><a href="#" >Hyginic care</a></div>
                    </nav>
                </div>
            </div>
        </div>
    )
}