import { Link } from 'react-router-dom'
import styles from './Category.module.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Category({ name, image }) {
  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <div className={styles.category_container}>
      <div className={styles.category_image}>
        <Link to={`/products/category/${name}`}>
          <img
            src={require(`../../.././assets/categories/${image}`)}
            alt={name}
            crossOrigin='anonymous'
          />
        </Link>
      </div>
      <div
        className={styles.category_content}
        data-aos='zoom-in'
        data-aos-duration='2000'
      >
        <Link
          to={`/products/category/${name}`}
          className={styles.category_content_links}
          href='/products'
        >
          {name}
        </Link>
      </div>
    </div>
  )
}

export default Category
