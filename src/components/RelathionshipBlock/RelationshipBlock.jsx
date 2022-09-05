import styles from './Relationship.module.css'
import background from '../../assets/images/background.png'
import arrow from '../../assets/images/arrow.png'

function RelationshipBlock () {
    return (
        <div className={styles.main}>
            <img src={background} alt='yellow background' />
            <div className={styles.description}>
                <h1>Taking care<br /> for you Smart Dog !</h1>
                <p>Human-canine bonding is the relationship<br /> between dogs and humans</p>
                <button><div>Explore more</div>
                <img className={styles.arrow} src={arrow} alt='arrow' /></button>
            </div>
        </div>
    )
}

export default RelationshipBlock