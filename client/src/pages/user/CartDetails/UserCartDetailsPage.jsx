import React from 'react'
import CartItem from '../../../components/CartItem/CartItem'
import styles from './UserCartDetailsPage.module.scss'

function UserCartDetailsPage() {
  return (
    <section className={styles.container}>
      <h4 className={styles.main_title}>Cart Details</h4>
      <div className={styles.order_navigation}>
        <ul>
          <li className={styles.order_navigation_step}>
            Shopping Cart{' '}
            <span className={styles.order_navigation_number}>
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
      <div className={styles.wrapper}>
        <div className={styles.container_right}>
          <div>
            <h5 className={styles.title}>Shipping Details</h5>
            <ul className={styles.shipping_details}>
              <li>
                <p>
                  <b>Name:</b>
                </p>
                <p>Jane Doe</p>
              </li>
              <li>
                <p>
                  <b>Delivery Address:</b>
                </p>
                <p>Some St. 1, Athens, Greece, 10000</p>
              </li>
              <li>
                <p>
                  <b>Contact Phone:</b>
                </p>
                <p>210 000 00 00</p>
              </li>
            </ul>
          </div>
          <h5 className={styles.title}>Order summary</h5>
          <ul className={styles.total_amount_details}>
            <li>
              <p>
                <b>Items price (after tax):</b>
              </p>
              <p>$400.00</p>
            </li>
            <li>
              <p>
                <b>Shipping Costs:</b>
              </p>
              <p>included</p>
            </li>
            <li>
              <p>
                <b>Tax:</b>
              </p>
              <p>included</p>
            </li>
            <li>
              <div className={styles.payment_container}>
                <h5 className={styles.title}>Choose Payment method</h5>
                <select className={styles.select_payment_method}>
                  <option value='cc'>Credit Card</option>
                  <option value='pp'>PayPal</option>
                  <option value='cd'>Cash on Delivery</option>
                </select>
              </div>
            </li>
            <li className={styles.total}>
              <p>
                <b>Total price:</b>
              </p>
              <p>$400.00</p>
            </li>
            <div className={styles.checkout_button_container}>
              <button className={styles.checkout_button}>
                Pay for the order
              </button>
            </div>
          </ul>
        </div>
        <div className={styles.container_left}>
          {Array.from({ length: 4 }).map((item, idx) => (
            <CartItem key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default UserCartDetailsPage
