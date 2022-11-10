import React from 'react'
import { useNavigate } from 'react-router-dom'
import CartItem from '../../../components/CartItem/CartItem'
import styles from './CartPage.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import {
  addToCart,
  removeItemFromCart,
} from '../../../redux/actions/cartActions'
import axios from 'axios'

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const itemsCount = useSelector((state) => state.cart.itemsCount)
  const cartSubtotal = useSelector((state) => state.cart.cartSubtotal)
  const { userInfo } = useSelector((state) => state.userRegisterLogin)
  const reduxDispatch = useDispatch()
  const navigate = useNavigate()

  // fire change count of products in card
  const changeCount = (productID, count) => {
    reduxDispatch(addToCart(productID, count))
  }

  //create order
  const createOrder = async (orderData) => {
    const { data } = await axios.post('/api/orders/create', { ...orderData })
    return data
  }

  const orderHandler = () => {
    if (Object.keys(userInfo).length === 0) {
      window.alert(
        'To be available to create an order please log in or create a new account'
      )
      document.location.href = '/signup'
    } else {
      const orderData = {
        orderTotal: {
          itemsCount: itemsCount,
          cartSubtotal: cartSubtotal,
        },
        cartItems: cartItems.map((item) => {
          return {
            productID: item.productID,
            name: item.name,
            price: item.price,
            image: { path: item.image ? item.image.path ?? null : null },
            quantity: item.quantity,
            count: item.count,
          }
        }),
        paymentMethod: 'CreditCard',
      }
      createOrder(orderData)
        .then((data) => {
          if (data) {
            // console.log('Order created', data)
            navigate('/user/cart-details/' + data._id)
          }
        })
        .catch((err) => console.log(err))
    }
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
            Delivery <span className={styles.order_navigation_number}>4</span>
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
              <p>Total amount:</p> <span>€{cartSubtotal.toFixed(2)}</span>
            </li>
            <li>(Delivery cost will be calculate in the next step)</li>
            <li>
              <button
                className={styles.checkout_button}
                onClick={orderHandler}
                //if cart subtotal is 0 disable button
                disabled={cartSubtotal === 0}
              >
                Place an order
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default CartPage
