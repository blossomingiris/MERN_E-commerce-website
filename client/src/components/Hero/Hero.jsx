import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Hero.module.scss'
import hero from '../.././assets/other/hero.jpg'

function Hero() {
  return (
    <section className={styles.hero_container}>
      <div className={styles.hero_container_info}>
        <h3>
          Be free with <br />
          your scent
        </h3>
        <p className={styles.desc}>Sensual. Exuberant. Addictive.</p>
        <img
          src={hero}
          alt='perfume'
          className={styles.hero_image}
          crossOrigin='anonymous'
        />
        <div className={styles.button_wrapper}>
          {/* <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p> */}
          <Link to='/products'>
            <button className={styles.hero_container_button}>Shop now</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
