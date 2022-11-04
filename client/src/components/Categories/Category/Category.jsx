import { Link } from 'react-router-dom'
import styles from './Category.module.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Category({ item }) {
  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <div className={styles.category_container}>
      <div className={styles.category_image}>
        <Link to='/products'>
          <img
            src={require(`../../.././assets/categories/${item.img}.jpg`)}
            alt={item.img}
            crossorigin='anonymous'
          />
        </Link>
      </div>
      <div className={styles.category_content} data-aos='zoom-in'>
        <a className={styles.category_content_links} href='/products'>
          {item.title}
        </a>
      </div>
    </div>
  )
}

export default Category
