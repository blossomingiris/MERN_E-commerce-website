import CartItem from '../../../components/CartItem/CartItem'
import styles from './UserCartDetailsPage.module.scss'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function UserCartDetailsPage() {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const cartSubtotal = useSelector((state) => state.cart.cartSubtotal)
  const itemsCount = useSelector((state) => state.cart.itemsCount)
  const userInfo = useSelector((state) => state.userRegisterLogin.userInfo)
  const navigate = useNavigate()

  //if user doest have address or phone disable payment button
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [userAddress, setUserAddress] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('creditCard')

  // get user profile data
  const getUser = async () => {
    const { data } = await axios.get('/api/users/profile/' + userInfo._id)
    return data
  }

  useEffect(() => {
    // setButtonDisabled(false)
    getUser()
      .then((data) => {
        if (
          data.address &&
          data.city &&
          data.country &&
          data.postcode &&
          data.phoneNumber
        ) {
          setButtonDisabled(true)
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

  //handler for 'pay for order' button
  const handleClick = () => {
    if (!buttonDisabled) {
      window.alert(
        'Please provide your profile with additional information (delivery address, phone number, etc.)'
      )
    } else {
      window.alert('Your order was successfully created')
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
            image: item.image,
            quantity: item.quantity,
            count: item.count,
          }
        }),
        paymentMethod: paymentMethod,
      }
      createOrder(orderData)
        .then((data) => {
          if (data) {
            navigate('/user/order-details/' + data._id)
          }
        })
        .catch((err) => console.log(err))
    }
  }

  //handler for choose payment method option

  const paymentHandler = (e) => {
    setPaymentMethod(e.target.value)
  }

  //save user order data in db
  const createOrder = async (orderData) => {
    const { data } = await axios.post('/api/orders/create', { ...orderData })
    return data
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
                userAddress.phoneNumber ? (
                  <p>
                    {userAddress.address}, {userAddress.city},
                    {userAddress.country}, {userAddress.postcode}
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
                <b>${cartSubtotal.toFixed(2)}</b>
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
                  <option value='creditCard'>Credit Card</option>
                  <option value='payPal'>PayPal</option>
                  <option value='cash'>Cash on Delivery</option>
                </select>
              </div>
            </li>
            <li className={styles.total}>
              <p>
                <b>Total price:</b>
              </p>
              <p>${cartSubtotal.toFixed(2)}</p>
            </li>
            <div className={styles.checkout_button_container}>
              <button className={styles.checkout_button} onClick={handleClick}>
                Pay for the order
              </button>
            </div>
          </ul>
        </div>
        <div className={styles.container_left}>
          {cartItems.map((item, idx) => (
            <CartItem key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default UserCartDetailsPage
