import React from 'react'
import styles from './AdminLinks.module.scss'
import { logout } from '../../redux/actions/userActions'
import { useDispatch } from 'react-redux'

function AdminLinks() {
  //logout functionality
  const dispatch = useDispatch()

  return (
    <div className={styles.admin_links_container}>
      <ul>
        <a href='#'>
          <li>Orders</li>
        </a>
        <a href='#'>
          <li>Products</li>
        </a>
        <a href='#'>
          <li onClick={() => dispatch(logout())}>Logout</li>
        </a>
      </ul>
    </div>
  )
}

export default AdminLinks
