import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../../redux/actions/userActions'
import { useDispatch } from 'react-redux'
import styles from './AdminOrdersPage.module.scss'
import axios from 'axios'
import AdminLinks from '../../../components/AdminLinks/AdminLinks'

function AdminOrdersPage() {
  const [orders, setOrders] = useState([])

  const dispatch = useDispatch()

  const getListOfOrders = async () => {
    const { data } = await axios.get('/api/orders/admin')
    return data
  }

  useEffect(() => {
    getListOfOrders()
      .then((orders) => setOrders(orders))
      .catch((error) => dispatch(logout))
  }, [])

  return (
    <section className={styles.container}>
      <AdminLinks />
      <div className={styles.container_right}>
        <h4 className={styles.title}>Orders List</h4>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Order ID</th>
              <th>Payment Method</th>
              <th>Paid At</th>
              <th>Total Amount</th>
              <th>Delivery Status</th>
              <th>Order Details</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{order._id}</td>
                <td>{order.paymentMethod}</td>
                <td>{order.paidAt}</td>
                <td>€{order.orderTotal.cartSubtotal}</td>
                <td>
                  {order.isDelivered ? <>Delivered</> : <>Not delivered</>}
                </td>
                <td>
                  <Link
                    to={`/admin/order-details/${order._id}`}
                    className={styles.link}
                  >
                    Order details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default AdminOrdersPage
