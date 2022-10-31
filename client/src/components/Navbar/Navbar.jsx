import { Link } from 'react-router-dom'
import { MdSearch } from 'react-icons/md'
import { RiShoppingBagLine } from 'react-icons/ri'
import { FaRegUser } from 'react-icons/fa'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { logout } from '../../redux/actions/userActions'
import { useDispatch } from 'react-redux'
import styles from './Navbar.module.scss'

function Navbar() {
  //animated navbar when scroll it using custom hook
  const scrollPosition = useScrollPosition()

  //logout functionality
  const dispatch = useDispatch()

  return (
    <nav className={scrollPosition > 0 ? 'navbar_animated' : 'navbar'}>
      <div className={styles.navbar_wrapper}>
        <div className={styles.wrapper_left}>
          <div className={styles.logo}>
            <Link to='/'>
              <h2>Kupos</h2>
            </Link>
          </div>
        </div>
        <div className={styles.wrapper_center}>
          <Link to='/products'>Store</Link>
          <Link to='/what-makes-us-different'>Transparent Beauty</Link>
          <Link to='/about-us'>About us</Link>
        </div>
        <div className={styles.wrapper_right}>
          <Link to='/admin/users'>
            <MdOutlineAdminPanelSettings className={styles.navbar_icon_admin} />
          </Link>
          <Link to='/login'>
            <FaRegUser className={styles.navbar_icon_user} />
          </Link>
          <Link to='/cart'>
            <div className={styles.navbar_icons_group}>
              <RiShoppingBagLine className={styles.navbar_icon_bag} />
              <p>(0)</p>
            </div>
          </Link>
          <div className={styles.search_container}>
            <form className={styles.search_form}>
              <input
                type='search'
                placeholder='Search..'
                className={styles.search_input}
              />
              <MdSearch className={styles.search_icon} />
            </form>
          </div>
          <div className={styles.dropdown}>
            Username
            <ul className={styles.dropdown_menu}>
              <li>
                <Link to='/user'>My Profile</Link>
              </li>
              <li>
                <Link to='/user/my-orders'>My Orders</Link>
              </li>
              <li className={styles.logout} onClick={() => dispatch(logout())}>
                <p> Logout </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
