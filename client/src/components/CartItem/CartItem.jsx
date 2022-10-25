import React from 'react'
import styles from './CartItem.module.scss'
import image from '../../assets/popular_products/product_4.jpg'
import { MdClose } from 'react-icons/md'

function CartItem() {
  return (
    <li className={styles.li_cart_item}>
      <div className={styles.image_container}>
        <img src={image} alt='' crossOrigin='anonymous' />
      </div>
      <div>Product Name</div>
      <div className={styles.price}>$50.00</div>
      <input
        className={styles.options_container}
        type='number'
        placeholder='1'
        maxLength='20'
        min='1'
      />
      <button className={styles.delete_button}>
        <MdClose className={styles.icon}></MdClose>
      </button>
    </li>
  )
}

export default CartItem
