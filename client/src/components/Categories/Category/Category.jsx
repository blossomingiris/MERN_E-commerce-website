import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Category.module.scss'

function Category({ item }) {
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
      <div className={styles.category_content}>
        <a className={styles.category_content_links} href='/products'>
          {item.title}
        </a>
      </div>
    </div>
  )
}

export default Category
