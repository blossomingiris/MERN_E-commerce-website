import React from 'react'
import styles from './CartItem.module.scss'
import image from '../../assets/popular_products/product_4.jpg'
import { MdClose } from 'react-icons/md'

function CartItem({ item, orderCreated = false, changeCount = false }) {
  return (
    <li className={styles.li_cart_item}>
      <div className={styles.image_container}>
        <img src={image} alt='' crossOrigin='anonymous' />
      </div>
      <div>{item.name}</div>
      <div className={styles.price}>${item.price}</div>
      <input
        onChange={
          changeCount
            ? (e) => changeCount(item.productID, e.target.value)
            : undefined
        }
        className={styles.options_container}
        value={item.quantity}
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
