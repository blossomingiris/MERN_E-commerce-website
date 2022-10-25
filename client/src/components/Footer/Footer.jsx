import React from 'react'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_links_container}>
          <ul className={styles.footer_links}>
            <a href=''>
              <li>About Us</li>
            </a>
            <a href=''>
              <li>Social Responsibility</li>
            </a>
            <a href=''>
              <li>Transparent Beauty</li>
            </a>
          </ul>
        </div>
        <div className={styles.footer_links_container}>
          <p>Let's be friends</p>
          <div className={styles.footer_social_links}>
            <a href=''>
              <span>Social</span>
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
            Sign up so you don't miss out.
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
