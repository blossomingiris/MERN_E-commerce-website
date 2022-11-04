import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductItem.module.scss'

function ProductItem({ productID, name, description, price, images }) {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img
          src={require(`../../assets/products/${images[1].path}`)}
          alt={name}
        />
      </div>
      <div className={styles.item_card_info_container}>
        <div className={styles.title}>{name}</div>
        <div className={styles.price}>${price.toFixed(2)}</div>
        <div>
          <Link to={`/product-details/${productID}`}>
            <button className={styles.button}>Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
