import { useEffect, useState } from 'react'
import styles from './Categories.module.scss'
import video from '../../assets/other/intro_video.mp4'
import Category from './Category/Category'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { getCategories } from './apiRequestGetCategories'

function Categories() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
    getCategories()
      .then((data) => setCategories(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <section className={styles.categories_container}>
      <div
        data-aos='fade-down'
        data-aos-duration='2000'
        className={styles.categories_desc}
      >
        <p>
          Meet our Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dignissimos facilis laborum non iusto praesentium distinctio obcaecati
          nulla? Sunt, quis temporibus.
        </p>
      </div>

      <div className={styles.categories_wrapper}>
        <div className={styles.categories_container_left}>
          {categories.map((category, idx) => (
            <Category
              categoryName={category.name}
              key={`${category.name}_${idx}`}
              image={category.image}
            />
          ))}
        </div>
        <div className={styles.categories_container_right}>
          <video
            src={video}
            className={styles.categories_video}
            autoPlay
            loop
            playsInline
            muted
          ></video>
        </div>
      </div>
    </section>
  )
}

export default Categories
