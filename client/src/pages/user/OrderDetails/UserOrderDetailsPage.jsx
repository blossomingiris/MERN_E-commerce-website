import { useState, useEffect } from 'react'
import styles from './UserOrderDetailsPage.module.scss'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function UserOrderDetailsPage() {
  const userInfo = useSelector((state) => state.userRegisterLogin.userInfo)
  const [userAddress, setUserAddress] = useState({})
  const [orderDetails, setOrderDetails] = useState({})
  const id = useParams()

  //fetch user profile data from db

  const getUser = async () => {
    const { data } = await axios.get('/api/users/profile/' + userInfo._id)
    return data
  }

  useEffect(() => {
    getUser()
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
        setOrderDetails(data.paymentMethod)
      })
      .catch((err) => console.log(err))
  }, [])

  // console.log(orderDetails)

  //fetch order details data from db
  const getOrder = async (orderId) => {
    const { data } = await axios.get('/api/orders/user/' + orderId)
    return data
  }

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
              <p>
                {userInfo.name} {userInfo.lastName}
              </p>
            </li>
            <li>
              <p>
                <b>Delivery Address:</b>
              </p>
              <p>
                {userAddress.address}, {userAddress.city}, {userAddress.country}
                , {userAddress.postcode}
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
            <p>Status:</p>
            <p>Not delivered</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserOrderDetailsPage
