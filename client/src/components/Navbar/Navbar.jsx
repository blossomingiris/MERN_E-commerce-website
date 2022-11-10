import { Link, useNavigate, useParams } from 'react-router-dom'
import { MdSearch } from 'react-icons/md'
import { RiShoppingBagLine } from 'react-icons/ri'
import { FaRegUser } from 'react-icons/fa'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { logout } from '../../redux/actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import styles from './Navbar.module.scss'

function Navbar() {
  //query for search products
  const [query, setSearchQuery] = useState('')

  //animated navbar when scroll it using custom hook
  const scrollPosition = useScrollPosition()

  //logout functionality
  const dispatch = useDispatch()

  //read user data from redux
  const { userInfo } = useSelector((state) => state.userRegisterLogin)

  //read products details data from redux
  const itemsCount = useSelector((state) => state.cart.itemsCount)
  const navigate = useNavigate()
  //submit search query
  const { searchQuery } = useParams() || ''
  //search query

  const queryHandler = (e) => {
    if (e.keyCode && e.keyCode === 13) return
    e.preventDefault()
    //if search query exist navigate to the page with query result
    if (query.trim()) {
      navigate(`/products/search/${query}`)
    } else {
      navigate('/products')
    }
  }

  return (
    <nav className={scrollPosition > 0 ? 'navbar_animated' : 'navbar'}>
      <div className={styles.navbar_wrapper}>
        <div className={styles.wrapper_left}>
          <div className={styles.logo}>
            <Link to='/'>
              <h2>Kipos</h2>
            </Link>
          </div>
        </div>
        <div className={styles.wrapper_center}>
          <Link to='/products'>Store</Link>
          <Link to='/what-makes-us-different'>Transparent Beauty</Link>
          <Link to='/about-us'>About us</Link>
        </div>
        <div className={styles.wrapper_right}>
          {Object.keys(userInfo).length === 0 ? (
            <Link to='/login'>
              <FaRegUser className={styles.navbar_icon_user} />
            </Link>
          ) : userInfo.name && userInfo.isAdmin ? (
            <Link to='/admin/users'>
              <MdOutlineAdminPanelSettings
                className={styles.navbar_icon_admin}
              />
            </Link>
          ) : (
            <div className={styles.dropdown}>
              <p className={styles.user_info}>
                {userInfo.name} {userInfo.lastName}
              </p>
              <ul className={styles.dropdown_menu}>
                <li>
                  <Link to='/user'>My Profile</Link>
                </li>
                <li>
                  <Link to='/user/my-orders'>My Orders</Link>
                </li>
                <li
                  className={styles.logout}
                  onClick={() => dispatch(logout())}
                >
                  <p> Logout </p>
                </li>
              </ul>
            </div>
          )}
          <Link to='/cart'>
            <div className={styles.navbar_icons_group}>
              <RiShoppingBagLine className={styles.navbar_icon_bag} />
              <p>({itemsCount === 0 ? '0' : itemsCount})</p>
            </div>
          </Link>
          <div className={styles.search_container}>
            <form className={styles.search_form}>
              <input
                type='search'
                placeholder='Search..'
                className={styles.search_input}
                onKeyUp={queryHandler}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button>
                <MdSearch
                  className={styles.search_icon}
                  onClick={queryHandler}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
