import React from 'react'
import { MdCheckBoxOutlineBlank } from 'react-icons/md'
import CartItem from '../../../components/CartItem/CartItem'
import styles from './UserOrderDetailsPage.module.scss'

function UserOrderDetailsPage() {
  return (
    <section className = {styles.container}>
      <h4 className={styles.main_title}>Order Details</h4>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <ul className={styles.shipping_details}>
            <li>
              <p>
                <b>Order number:</b>
              </p>
              <p>001</p>
            </li>
            <li>
              <p>
                <b>Paid at:</b>
              </p>
              <p>10/25/2022</p>
            </li>
            <li>
              <p>
                <b>Total amount:</b>
              </p>
              <p>$400.00</p>
            </li>
            <li>
              <p>
                <b>Payment method:</b>
              </p>
              <p>Credit card</p>
            </li>
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
              <p>(210) 000 00 00</p>
            </li>
          </ul>
          <div className={styles.message}>
            <p>Status:</p>
            <p>Not delivered</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserOrderDetailsPage
