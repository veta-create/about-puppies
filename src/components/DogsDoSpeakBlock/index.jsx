import styles from './style.module.css'

export function DogsDoSpeakBlock() {
  return(
    <section className={styles.main}>
      <div className={styles.learn}>
        <div><a href='#'>Learn more</a></div>
      </div>
      <div className={styles.description}>
        <h1>Dogs do speak, but only to those<br /> who know how to listen.</h1>
        <p>Sweet roll ice cream powder candy canes ice cream<br /> donut pudding biscuit ice cream.
            Cupcake tootsie roll<br /> sugar plum danish pudding fruitcake cheesecake jelly-o.<br /> Pie muffin topping cake.
            Pudding biscuit caramels topb</p>
        <button><span>Explore more</span></button>
      </div>
    </section>
  )
}