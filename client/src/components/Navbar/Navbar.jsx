import { Link } from 'react-router-dom'
import { MdSearch } from 'react-icons/md'
// import { BsBag } from 'react-icons/bs'
import { RiShoppingBagLine } from 'react-icons/ri'
import { FaRegUser } from 'react-icons/fa'
import styles from './Navbar.module.scss'

function Navbar() {
  return (
    <nav className={styles.navbar}>
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
        </div>
      </div>
    </nav>
  )
}

export default Navbar
