import { Link } from 'react-router-dom'
import styles from './PopularProductItem.module.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function PopularProductItem({ item }) {
  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <Link to='/product-details'>
      {' '}
      <div
        className={styles.slider_card}
        // data-aos='slide-right'
        // data-aos-duration='4000'
      >
        <img
          src={require(`../../.././assets/products/${item.img}.jpg`)}
          alt={item.title}
          className={styles.popular_product_image}
        />

        <div className={styles.slider_card_body}>
          <div className={styles.slider_card_title}>{item.title}</div>
          <div className={styles.price}>${item.price}</div>
          <button className={styles.button}>Buy Now</button>{' '}
        </div>
      </div>
    </Link>
  )
}

export default PopularProductItem
