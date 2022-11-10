import { Link } from 'react-router-dom'
import styles from './UserOrdersPage.module.scss'
import { BsCheck2, BsX } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import axios from 'axios'

const UserOrdersPage = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    getOrders()
      .then((orders) => setOrders(orders))
      .catch((err) => console.log(err))
  }, [])

  const getOrders = async () => {
    const { data } = await axios.get('/api/orders')
    return data
  }

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>My Orders</h4>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Total</th>
            <th>Delivered</th>
            <th>Order details</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{order.createdAt.substring(0, 10)}</td>
              <td>€ {order.orderTotal.cartSubtotal}</td>
              <td>{order.isDelivered ? <BsCheck2 /> : <BsX />}</td>
              <td>
                <Link
                  to={`/user/order-details/${order._id}`}
                  className={styles.table_link}
                >
                  go to order
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default UserOrdersPage