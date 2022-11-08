import { Link } from 'react-router-dom'
import styles from './UserOrdersPage.module.scss'
import { BsCheck2, BsX } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import axios from 'axios'

const UserOrdersPage = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    getOrders().then((orders) => setOrders(orders))
  }, [])

  const getOrders = async () => {
    const { data } = await axios.get('/api/orders')
    return data
  }

  console.log('orders', orders)

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
              <td>2022-10-25</td>
              <td>$100.00</td>
              <td></td>
              <td>
                <Link to='/user/order-details' className={styles.table_link}>
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
