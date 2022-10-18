import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Hero.module.scss'
import hero from '../.././assets/other/hero.jpg'

function Hero() {
  return (
    <section className={styles.hero_container}>
      <div className={styles.hero_container_info}>
        <p>SMALL TEXT</p>
        <h3>MID TEXT</h3>
        <img
          src={hero}
          alt='perfume'
          className={styles.hero_image}
          crossorigin='anonymous'
        />
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Link to='/products'>
            <button className={styles.hero_container_button}>Shop now</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
