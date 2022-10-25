import React from 'react'
import { Link } from 'react-router-dom'
import uuid from 'react-uuid'
import CartItem from '../../../components/CartItem/CartItem'
import styles from './CartPage.module.scss'

function CartPage() {
  return (
    <section className={styles.container}>
      <div className={styles.order_navigation}>
        <ul>
          <li className={styles.order_navigation_step}>
            Shopping Cart{' '}
            <span className={styles.order_navigation_number} id = {styles.first_step}>
              <p>1</p>
            </span>
          </li>

          <li className={styles.order_navigation_step}>
            Checkout<span className={styles.order_navigation_number}>2</span>
          </li>
          <li className={styles.order_navigation_step}>
            Payment <span className={styles.order_navigation_number}>3</span>
          </li>
          <li className={styles.order_navigation_step}>
            Finish <span className={styles.order_navigation_number}>4</span>
          </li>
        </ul>
      </div>

      <div className={styles.orders_wrapper}>
        <div className={styles.left_wrapper}>
          <h4 className={styles.title}>Your shopping cart</h4>
          <ul>
            {Array.from({ length: 4 }).map((item) => (
              <CartItem key={uuid()} />
            ))}
          </ul>
          <span className={styles.message}>Your cart is empty</span>
        </div>
        <div className={styles.right_wrapper}>
          <ul>
            <li>
              <h4 className={styles.title}>
                1 item, total (excluding delivery):
              </h4>
            </li>
            <li className={styles.price_container}>
              <p>Price:</p> <span>$400</span>
            </li>
            <li>(Delivery cost will be calculate in the next step)</li>
            <li>
              <Link to='/user/order-details'>
                <button className={styles.checkout_button}>
                  Place an order
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default CartPage
