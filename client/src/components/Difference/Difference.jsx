import styles from './Difference.module.scss'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Difference({ title, image, icon }) {
  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <div
      className={styles.wrapper}
      data-aos='fade-left'
      data-aos-duration='2000'
    >
      <div className={styles.content}>
        <h6 className={styles.desc}>Transparency</h6>
        <div>
          {' '}
          <h1 className={styles.title}>{title}</h1>
          <img
            className={styles.icon}
            src={require(`../../assets/other/${icon}`)}
            alt=''
            data-aos='zoom-in'
            data-aos-duration='2000'
          />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
          corrupti molestiae, quos quas ipsa fugit explicabo cumque quia, facere
          saepe, quae numquam suscipit sequi quibusdam blanditiis provident
          itaque nemo adipisci? Illum consequuntur vero enim facere ducimus
          modi? Eius odit animi aperiam similique molestias sit! Quo distinctio.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
          corrupti molestiae, quos quas ipsa fugit explicabo cumque quia, facere
          saepe.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
          corrupti molestiae, quos quas ipsa fugit explicabo cumque quia, facere
        </p>{' '}
        <br />
      </div>
      <div className={styles.image_wrapper}>
        <img src={require(`../../assets/other/${image}`)} alt={title} />
      </div>
    </div>
  )
}

export default Difference
