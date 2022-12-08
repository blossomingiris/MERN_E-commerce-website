import styles from './SuccessPayment.module.scss'
import { BsCheckCircle } from 'react-icons/bs'
import UserLinks from '../../../components/UserLinks/UserLinks'
import { removeItemFromCart } from '../../../redux/actions/cartActions'
import { useEffect } from 'react'

function SuccessPayment() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.order_navigation}>
          <ul>
            <li className={styles.order_navigation_step}>
              Shopping Cart
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
              Delivery <span className={styles.order_navigation_number}>4</span>
            </li>
          </ul>
        </div>
        <h3 className={styles.desc}>
          Your order placed successfully! <br />
        </h3>
        <BsCheckCircle className={styles.icon} />
      </section>
      <UserLinks />
    </>
  )
}

export default SuccessPayment
