import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../../../components/CartItem/CartItem'
import styles from './CartPage.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import {
  addToCart,
  removeItemFromCart,
} from '../../../redux/actions/cartActions'

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const itemsCount = useSelector((state) => state.cart.itemsCount)
  const cartSubtotal = useSelector((state) => state.cart.cartSubtotal)
  const reduxDispatch = useDispatch()

  // fire change count of products in card
  const changeCount = (productID, count) => {
    reduxDispatch(addToCart(productID, count))
  }

  // remove products from cart
  const removeProductFromCartHandler = (productID, quantity, price) => {
    if (window.confirm('Are you sure you want to remove product from cart?'))
      reduxDispatch(removeItemFromCart(productID, quantity, price))
  }

  return (
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
            Finish <span className={styles.order_navigation_number}>4</span>
          </li>
        </ul>
      </div>

      <div className={styles.orders_wrapper}>
        <div className={styles.left_wrapper}>
          <h4 className={styles.title}>My shopping cart</h4>

          {/* if products (array) doesn't exist show message 
					otherwise show cart products */}

          {cartItems.length === 0 ? (
            <span className={styles.message}>Your cart is empty</span>
          ) : (
            <ul>
              {cartItems.map((item, idx) => (
                <CartItem
                  key={idx}
                  changeCount={changeCount}
                  item={item}
                  removeProductFromCartHandler={removeProductFromCartHandler}
                />
              ))}
            </ul>
          )}
        </div>
        <div className={styles.right_wrapper}>
          <ul>
            <li>
              <h4 className={styles.title}>
                <p>{itemsCount} items, total amount (excluding delivery):</p>
              </h4>
            </li>
            <li className={styles.price_container}>
              <p>Total amount:</p> <span>${cartSubtotal.toFixed(2)}</span>
            </li>
            <li>(Delivery cost will be calculate in the next step)</li>
            <li>
              <Link to='/user/cart-details'>
                <button
                  className={styles.checkout_button}
                  //if cart subtotal is 0 disable button
                  disabled={cartSubtotal === 0}
                >
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
