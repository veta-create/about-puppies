import styles from './style.module.css'

export function DogFoodBlock() {
    return (
        <section className={styles.main}>
            <div className={styles.header}><h1>Dog Nutrients & Food </h1></div>
            <div className={styles.discount}><span>25 % OFF ALL</span> Products</div>        
            <button>View More</button> 
            <div className={styles.products}>
                <nav>
                  <div className={styles.card}>
                    <a href='#'>Drools|3KG</a>
                    <p>Adult chicken and egg Egg,<br /> Chicken 3 kg Dry Adult Dog<br /> Food</p>
                    <button>Buy Now</button>
                  </div>
                  <div className={styles.card}>
                    <a href='#'>Canine Greek 4KG</a>
                    <p>Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog<br /> Food</p>
                    <button>Buy Now</button>
                  </div>
                  <div className={styles.card}>
                    <a href='#'>Biscork Biscuits</a>
                    <p>Adult chicken and egg Egg, Chicken  Dry Adult Dog Food</p>
                    <button>Buy Now</button>
                  </div>
                </nav>
            </div>
        </section>
    )
}