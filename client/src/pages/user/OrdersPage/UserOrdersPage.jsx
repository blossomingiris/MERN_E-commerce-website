import styles from './UserOrdersPage.module.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getOrders } from './apiRequestGetOrders'
import { BsCheck2, BsX } from 'react-icons/bs'

const UserOrdersPage = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    getOrders()
      .then((orders) => setOrders(orders))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>My Orders</h4>
      <table>
        <thead className={styles.table_header}>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Total</th>
            <th>Delivered</th>
            <th>Order details</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan={5}>You don't have any orders</td>
            </tr>
          ) : (
            <>
              {' '}
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
            </>
          )}
        </tbody>
      </table>
    </div>
  )
}
export default UserOrdersPage
