import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './AdminOrderDetails.module.scss'
import axios from 'axios'
import AdminLinks from '../../../components/AdminLinks/AdminLinks'

function AdminOrderDetailsPage() {
  const [orderDetails, setOrderDetails] = useState({})
  const [orderDelivered, setOrderDelivered] = useState(false)
  const [deliveryDate, setDeliveryDate] = useState('')

  const { id } = useParams()

  useEffect(() => {
    getOrder(id)
      .then((data) => {
        setOrderDetails({
          paymentMethod: data.paymentMethod,
          cartSubtotal: data.orderTotal.cartSubtotal,
          oderId: data._id,
          paidAt: data.paidAt,
          isDelivered: data.isDelivered,
          userName: data.user?.name,
          userLastName: data.user?.lastName,
          userEmail: data.user?.email,
          userAddress: data.user?.address,
          userCity: data.user?.city,
          userState: data.user?.state,
          userCountry: data.user?.country,
          userPostcode: data.user?.postcode,
          userPhoneNumber: data.user?.phoneNumber,
          deliveredAt: data.deliveredAt,
        })
      })
      .catch((err) => console.log(err))
  }, [orderDelivered, deliveryDate])

  //fetch order details data from db
  const getOrder = async (orderId) => {
    const { data } = await axios.get('/api/orders/user/' + orderId)
    return data
  }

  // update delivery status of order
  const updateDeliveryStatus = async (orderId) => {
    const { data } = await axios.put('/api/orders/delivered/' + orderId)
    return data
  }

  const updateHandler = () => {
    updateDeliveryStatus(id)
      .then((data) => {
        if (data.isDelivered) {
          setOrderDelivered(true)
          setDeliveryDate(data.deliveredAt)
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <section className={styles.container}>
      <AdminLinks />
      <h4 className={styles.main_title}>Order Details</h4>
      <p className={styles.subtitle}>
        Order number: <br /> {orderDetails.oderId}{' '}
      </p>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <ul className={styles.order_details}>
            <li>
              <b>Client name:</b>
              {orderDetails.userName} {orderDetails.userLastName}
            </li>
            <li>
              <b>Delivery address:</b>
              {orderDetails.userAddress} {orderDetails.userState}{' '}
              {orderDetails.userCountry} {orderDetails.userPostcode}
            </li>
            <li>
              <b>Contact phone:</b>

              {orderDetails.userPhoneNumber}
            </li>
            <li>
              <b>Payment method:</b>
              {orderDetails.paymentMethod}
            </li>
            <li>
              <b>Paid at:</b>

              {orderDetails.paidAt
                ? orderDetails.paidAt.substring(0, 10)
                : 'Not paid yet'}
            </li>
            <li>
              <b>Total amount:</b>€ {orderDetails.cartSubtotal}
            </li>
            <li>
              <b>Delivery status:</b>

              {orderDetails.isDelivered ? (
                'Delivered'
              ) : (
                <div className={styles.delivery_status}>
                  Not delivered{' '}
                  <button onClick={() => updateHandler(orderDetails.orderId)}>
                    Update
                  </button>
                </div>
              )}
            </li>
            <li>
              <b>Delivered at:</b>
              {orderDetails.deliveredAt &&
                orderDetails.deliveredAt.substring(0, 10)}
            </li>
          </ul>
          <div></div>
        </div>
      </div>
    </section>
  )
}

export default AdminOrderDetailsPage
