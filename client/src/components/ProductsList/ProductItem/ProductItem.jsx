import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductItem.module.scss'

function ProductItem() {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img
          src={require('../../.././assets/popular_products/product_1.jpg')}
          alt='perfume'
        />
      </div>
      <div className={styles.title}>Lorem, ipsum.</div>
      <div className={styles.price}>$50.00</div>
      <div>
        <Link to='/product-details'>
          <button className={styles.button}>Buy Now</button>
        </Link>
      </div>
    </div>
  )
}

export default ProductItem
