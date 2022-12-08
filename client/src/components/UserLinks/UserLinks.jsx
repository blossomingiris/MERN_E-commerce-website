import styles from './UserLinks.module.scss'
import { Link } from 'react-router-dom'
import { MdManageSearch } from 'react-icons/md'
import { RiShoppingBagLine } from 'react-icons/ri'
import { FaRegUser } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function UserLinks() {
  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <section
      className={styles.container}
      data-aos='fade-down'
      data-aos-duration='2000'
    >
      <Link to='products' className={styles.link_wrapper}>
        <p>Search products</p>
        <MdManageSearch className={styles.search_icon} />
      </Link>
      <Link to='/user/my-orders' className={styles.link_wrapper}>
        <p>My account</p>
        <FaRegUser className={styles.user_icon} />
      </Link>
      <Link to='/cart' className={styles.link_wrapper}>
        <p>Shopping Cart</p>
        <RiShoppingBagLine className={styles.cart_icon} />
      </Link>
    </section>
  )
}

export default UserLinks
