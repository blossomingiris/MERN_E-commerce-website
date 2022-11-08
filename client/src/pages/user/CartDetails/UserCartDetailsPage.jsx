import CartItem from '../../../components/CartItem/CartItem'
import { loadScript } from '@paypal/paypal-js'
import styles from './UserCartDetailsPage.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import {
  removeItemFromCart,
  addToCart,
} from '../../../redux/actions/cartActions'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function UserCartDetailsPage() {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const cartSubtotal = useSelector((state) => state.cart.cartSubtotal)
  const userInfo = useSelector((state) => state.userRegisterLogin.userInfo)

  //if user doest have address or phone disable payment button
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [orderButtonMessage, setOrderButtonMessage] = useState('Pay for order')
  const [userAddress, setUserAddress] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('creditCard')
  const reduxDispatch = useDispatch()
  const { id } = useParams()

  // get user profile data
  const getUser = async () => {
    const { data } = await axios.get('/api/users/profile/' + userInfo._id)
    return data
  }

  useEffect(() => {
    getUser()
      .then((data) => {
        if (
          !data.address &&
          !data.city &&
          !data.country &&
          !data.postcode &&
          !data.phoneNumber &&
          !data.state
        ) {
          setButtonDisabled(true)
          setOrderButtonMessage('button disabled')
        } else {
          setUserAddress({
            address: data.address,
            city: data.city,
            country: data.country,
            postcode: data.postcode,
            phoneNumber: data.phoneNumber,
            state: data.state,
          })
        }
      })
      .catch((err) => console.log(err))
  }, [])

  //TODO: remove to separate file
  //pay pal handlers

  const onCancelHandler = function () {
    console.log('cancel')
  }

  const onApproveHandler = function () {
    console.log('onApproveHandler')
  }

  const onErrorHandler = function (err) {
    console.log('error')
  }

  //update order with paid info in db
  const updateOrder = async (orderID) => {
    const { data } = await axios.put('/api/orders/paid/' + orderID)
    return data
  }

  const updatePaymentMethod = async (orderID) => {
    const { data } = await axios.put('/api/orders/payment/' + orderID, {
      paymentMethod: paymentMethod,
    })
    return data
  }

  const handleCheckout = () => {
    updatePaymentMethod(id).then((data) => {
      console.log('order was updated')
    })
    if (cartItems.length === 0) {
      window.alert('Your cart is empty! Please add something to your cart.')
    } else if (paymentMethod === 'creditCard') {
      axios
        .post('/api/stripe/create-checkout-session', {
          cartItems,
          userID: userInfo._id,
        })
        .then((res) => {
          if (res.data.url) {
            window.location.href = res.data.url
          }
        })
        .catch((err) => console.log(err.message))
      updateOrder(id)
    } else if (paymentMethod === 'PayPal') {
      setOrderButtonMessage(
        'To pay for your order click one of the buttons below'
      )
      setButtonDisabled(true)
      loadScript({
        'client-id':
          'Ad7gq9u1HmzPCiNXVRccA0fmaJQTffsUE7egau0MMns_By0GmUBz9jhG7b-TAxVu8Cpbk1qrfv5v8vSE',
      })
        .then((paypal) => {
          paypal
            .Buttons(buttons(cartSubtotal, cartItems, id))
            .render('#paypal-container-element')
        })
        .catch((err) => {
          console.error('failed to load the PayPal JS SDK script', err)
        })
    } else if (paymentMethod === 'Cash') {
      window.alert(
        'Your order was successfully created. You will be pay on delivery.'
      )
      window.location.href = '/checkout-success'
    }
  }

  //paypal payment processing for order
  const buttons = (cartSubtotal, cartItems, id) => {
    return {
      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: cartSubtotal,
                breakdown: {
                  item_total: {
                    currency_code: 'USD',
                    value: cartSubtotal,
                  },
                },
              },
              items: cartItems.map((product) => {
                return {
                  name: product.name,
                  unit_amount: {
                    currency_code: 'USD',
                    value: product.price,
                  },
                  quantity: product.quantity,
                }
              }),
            },
          ],
        })
      },
      onCancel: onCancelHandler,
      onApprove: function (data, actions) {
        return actions.order.capture().then(function (orderData) {
          var transaction = orderData.purchase_units[0].payments.captures[0]
          if (
            transaction.status === 'COMPLETED' &&
            Number(transaction.amount.value) === Number(cartSubtotal)
          ) {
            updateOrder(id)
            window.location.href = '/checkout-success'
          }
        })
      },
      onError: onErrorHandler,
    }
  }
  //handler for choose payment method option
  const paymentHandler = (e) => {
    setPaymentMethod(e.target.value)
  }

  //remove product from cart
  const removeProductFromCartHandler = (productID, quantity, price) => {
    if (window.confirm('Are you sure you want to remove product from cart?'))
      reduxDispatch(removeItemFromCart(productID, quantity, price))
  }

  //  change count of products in card
  const changeCount = (productID, count) => {
    reduxDispatch(addToCart(productID, count))
  }

  return (
    <section className={styles.container}>
      <h4 className={styles.main_title}>Cart Details</h4>
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
      <div className={styles.message}>
        {orderButtonMessage === 'button disabled' ? (
          <p>
            Before create your order please provide your{' '}
            <Link to='/user' className={styles.link}>
              profile page
            </Link>{' '}
            with additional information (delivery address, phone number, etc.)'
          </p>
        ) : (
          ''
        )}
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
                <p className={styles.user_info}>
                  {userInfo.name} {userInfo.lastName}
                </p>
              </li>
              <li>
                <p>
                  <b>Delivery Address:</b>
                </p>
                {userAddress.address &&
                userAddress.city &&
                userAddress.country &&
                userAddress.postcode &&
                userAddress.state &&
                userAddress.phoneNumber ? (
                  <p>
                    {userAddress.address}, {userAddress.city},{' '}
                    {userAddress.state}, {userAddress.country},{' '}
                    {userAddress.postcode}
                  </p>
                ) : (
                  <b>
                    <p>required</p>
                  </b>
                )}
              </li>
              <li>
                <p>
                  <b>Contact Phone:</b>
                </p>
                {userAddress.phoneNumber ? (
                  <p>{userAddress.phoneNumber}</p>
                ) : (
                  <b>
                    <p>required</p>
                  </b>
                )}
              </li>
            </ul>
          </div>
          <h5 className={styles.title}>Order summary</h5>
          <ul className={styles.total_amount_details}>
            <li>
              <p>
                <b>Items price (after tax):</b>
              </p>
              <p>
                <b>€ {cartSubtotal.toFixed(2)}</b>
              </p>
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
                <select
                  className={styles.select_payment_method}
                  onChange={paymentHandler}
                >
                  <option value='Credit Card'>Credit Card</option>
                  <option value='PayPal'>PayPal</option>
                  <option value='Cash'>Cash on Delivery</option>
                </select>
              </div>
            </li>
            <li className={styles.total}>
              <p>
                <b>Total price:</b>
              </p>
              <p>€ {cartSubtotal.toFixed(2)}</p>
            </li>
            <div className={styles.checkout_button_container}>
              <button
                className={styles.checkout_button}
                onClick={handleCheckout}
                disabled={buttonDisabled}
              >
                {orderButtonMessage}
              </button>
            </div>
            <div id='paypal-container-element'></div>
          </ul>
        </div>
        <div className={styles.container_left}>
          {cartItems.map((item, idx) => (
            <CartItem
              key={idx}
              item={item}
              removeProductFromCartHandler={removeProductFromCartHandler}
              changeCount={changeCount}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default UserCartDetailsPage
