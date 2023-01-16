import styles from './UserOrderDetailsPage.module.scss'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUser, getOrder } from './apiRequests'

function UserOrderDetailsPage() {
  const userInfo = useSelector((state) => state.userRegisterLogin.userInfo)
  const [userAddress, setUserAddress] = useState({})
  const [orderDetails, setOrderDetails] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getUser(userInfo._id)
      .then((data) => {
        setUserAddress({
          address: data.address,
          city: data.city,
          country: data.country,
          postcode: data.postcode,
          state: data.state,
          phoneNumber: data.phoneNumber,
        })
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    getOrder(id)
      .then((data) => {
        setOrderDetails({
          paymentMethod: data.paymentMethod,
          cartSubtotal: data.orderTotal.cartSubtotal,
          oderNumber: data._id,
          paidAt: data.paidAt,
          isDelivered: data.isDelivered,
          deliveryDate: data.deliveredAt,
        })
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <section className={styles.container}>
      <h4 className={styles.main_title}>Order Details</h4>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <ul className={styles.shipping_details}>
            <li>
              <p>
                <b>Order number:</b>
              </p>
              <p>{orderDetails.oderNumber}</p>
            </li>
            <li>
              <p>
                <b>Paid at:</b>
              </p>
              <p>
                {orderDetails.paidAt !== undefined ? (
                  orderDetails.paidAt.substring(0, 10)
                ) : (
                  <p>Not paid yet</p>
                )}
              </p>
            </li>
            <li>
              <p>
                <b>Total amount:</b>
              </p>
              <p>€ {orderDetails.cartSubtotal}</p>
            </li>
            <li>
              <p>
                <b>Payment method:</b>
              </p>
              <p>{orderDetails.paymentMethod}</p>
            </li>
            <li>
              <p>
                <b>Name:</b>
              </p>
              <p>
                {userInfo.name} {userInfo.lastName}
              </p>
            </li>
            <li>
              <p>
                <b>Delivery Address:</b>
              </p>
              <p>
                {userAddress &&
                userAddress.city &&
                userAddress.country &&
                userAddress.state &&
                userAddress.postcode
                  ? (userAddress.address,
                    userAddress.city,
                    userAddress.country,
                    userAddress.postcode)
                  : ''}
              </p>
            </li>
            <li>
              <p>
                <b>Contact Phone:</b>
              </p>
              <p>{userAddress.phoneNumber}</p>
            </li>
          </ul>
          <div className={styles.message}>
            <p>Delivery status:</p>
            {orderDetails.isDelivered ? (
              <p>Delivered at {orderDetails.deliveryDate.substring(0, 10)}</p>
            ) : (
              'Not delivered'
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserOrderDetailsPage
