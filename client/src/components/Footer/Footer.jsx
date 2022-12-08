import styles from './Footer.module.scss'
import heart from '../../assets/other/heart.png'
import { Link } from 'react-router-dom'
import { FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa'

function Footer() {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_links_container}>
          <ul className={styles.footer_links}>
            <Link to='products'>
              <li>All products</li>
            </Link>
            <Link to='about-us'>
              <li>About Us</li>
            </Link>
            <Link to='what-makes-us-different'>
              <li>Transparent Beauty</li>
            </Link>
          </ul>
        </div>
        <div className={styles.footer_links_container}>
          <div className={styles.social_decs}>
            {' '}
            <p>Let's be friends</p>
            <img src={heart} alt='heart' />
          </div>

          <div className={styles.footer_social_links}>
            <a href='#' alt='Instagram'>
              <FaInstagram className={styles.social_icon} />
            </a>
            <a href='#' alt='TikTok'>
              <FaTiktok className={styles.social_icon} />
            </a>
            <a href='#' alt='Facebook'>
              <FaFacebook className={styles.social_icon} />
            </a>
          </div>
        </div>
        <div className={styles.footer_links_container}>
          <ul className={styles.footer_links}>
            <a href=''>
              <li>Frequently Asked Questions</li>
            </a>
            <a href=''>
              <li>Privacy Policy</li>
            </a>
            <a href=''>
              <li>Contact Us</li>
            </a>
          </ul>
        </div>
        <div className={styles.footer_newsletter}>
          <p className={styles.footer_newsletter_desc}>
            We send exclusive offers and information strictly to our email list.
            Join us so you don't miss out.
          </p>
          <form className={styles.newsletter_form}>
            <input
              type='email'
              placeholder='email@newsletter.com'
              className={styles.input_field}
              required
            />
            <button className={styles.newsletter_button}>Join</button>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer
