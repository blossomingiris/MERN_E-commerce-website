import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PopularProductItem.module.scss'

function PopularProductItem({ item }) {
  return (
    <div className={styles.container}>
      <div className={styles.popular_product_image}>
        <a href=''>
          <img
            src={require(`../../.././assets/popular_products/${item.img}.jpg`)}
            alt={item.title}
          />
        </a>
      </div>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.price}>${item.price}</div>
      <Link to='/product-details'>
        <button className={styles.button}>Buy Now</button>{' '}
      </Link>
    </div>
  )
}

export default PopularProductItem
