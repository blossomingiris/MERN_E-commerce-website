import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Hero.module.scss'
import hero from '../.././assets/other/hero.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Hero() {
  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <section className={styles.hero_container}>
      <div className={styles.hero_container_info}>
        {' '}
        <h3 data-aos='fade-left' data-aos-duration='2000'>
          Be free with <br />
          your scent
        </h3>
        <p
          data-aos='fade-left'
          data-aos-duration='2000'
          className={styles.desc}
        >
          Sensual. Exuberant. Addictive.
        </p>
        <img
          src={hero}
          alt='perfume'
          className={styles.hero_image}
          crossOrigin='anonymous'
          data-aos='zoom-out'
          data-aos-duration='2000'
        />{' '}
        <div
          className={styles.button_wrapper}
          data-aos='fade-up-left'
          data-aos-duration='2500'
        >
          <Link to='/products'>
            <button className={styles.hero_container_button}>Shop now</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
