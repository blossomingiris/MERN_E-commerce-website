import { Link } from 'react-router-dom'
import styles from './UserOrdersPage.module.scss'
import { BsCheck2, BsX } from 'react-icons/bs'

const UserOrdersPage = () => {
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
          {[<BsCheck2 />, <BsX />].map((item, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>2022-10-25</td>
              <td>$100.00</td>
              <td>{item}</td>
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
