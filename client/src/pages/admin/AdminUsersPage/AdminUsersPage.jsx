import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { BsCheck2, BsX } from 'react-icons/bs'
import { FaRegEdit, FaBan } from 'react-icons/fa'
import { logout } from '../../../redux/actions/userActions'
import { useDispatch } from 'react-redux'
import styles from './AdminUsersPage.module.scss'
import axios from 'axios'
import AdminLinks from '../../../components/AdminLinks/AdminLinks'

function AdminUsersPage() {
  const [users, setUsers] = useState([])

  //fetch users list from db
  const getListOfUsers = async () => {
    const { data } = await axios.get('/api/users')
    return data
  }

  const dispatch = useDispatch()

  useEffect(() => {
    getListOfUsers()
      .then((res) => setUsers(res))
      .catch((error) => dispatch(logout))
  }, [])

  return (
    <section className={styles.container}>
      <AdminLinks />
      <div className={styles.container_right}>
        <h4 className={styles.title}>User List</h4>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>E-mail</th>
              <th>is Admin</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.isAdmin ? <BsCheck2 /> : <BsX />}</td>
                <td>
                  <a href='#'>
                    <FaRegEdit />
                  </a>
                </td>
                <td>
                  <a href='#'>
                    <FaBan />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default AdminUsersPage
