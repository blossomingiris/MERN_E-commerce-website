import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { scrollToTop } from '../../../utils/scrollToTop'
import styles from './Category.module.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Category({ categoryName, image }) {
  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <div className={styles.category_container}>
      <div className={styles.category_image}>
        <Link to={`/products/category/${categoryName}`} onClick={scrollToTop}>
          <img
            src={require(`../../.././assets/categories/${image}`)}
            alt={categoryName}
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
          to={`/products/category/${categoryName}`}
          className={styles.category_content_links}
          href='/products'
          onClick={scrollToTop}
        >
          {categoryName}
        </Link>
      </div>
    </div>
  )
}

export default Category
