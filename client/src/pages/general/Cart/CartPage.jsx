import React from 'react'
import styles from './CartPage.module.scss'

function CartPage() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.container_left}>
          <h3 className={styles.title}>Shopping Cart</h3>
        </div>
        <div className={styles.container_right}>
          <h3 className={styles.title}>Checkout</h3>
          <div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartPage
