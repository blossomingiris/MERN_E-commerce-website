import React from 'react'
import styles from './Category.module.scss'

function Category({ item }) {
  return (
    <div className={styles.category_container}>
      <div className={styles.category_image}>
        <a href=''>
          <img src={require(`../../.././assets/categories/${item.img}.jpg`)} />
        </a>
      </div>
      <div className={styles.category_content}>
        <a href=''>{item.title}</a>
      </div>
    </div>
  )
}

export default Category
