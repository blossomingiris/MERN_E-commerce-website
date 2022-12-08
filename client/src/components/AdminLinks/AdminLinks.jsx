import { Link } from 'react-router-dom'
import styles from './AdminLinks.module.scss'
import { logout } from '../../redux/actions/userActions'
import { useDispatch } from 'react-redux'

function AdminLinks() {
  //logout functionality
  const dispatch = useDispatch()

  return (
    <div className={styles.admin_links_container}>
      <ul>
        <Link to='/admin/users'>
          <li>Users</li>
        </Link>
        <Link to='/admin/products'>
          <li>Products</li>
        </Link>
        <Link to='/admin/orders'>
          <li>Orders</li>
        </Link>
        <a href='#'>
          <li onClick={() => dispatch(logout())}>Log Out</li>
        </a>
      </ul>
    </div>
  )
}

export default AdminLinks
