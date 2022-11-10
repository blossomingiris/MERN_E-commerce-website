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
    <div className={styles.slider_card}>
      <img
        src={require(`../../.././assets/products/${item.images[1].path}`)}
        alt={item.name}
        className={styles.popular_product_image}
      />

      <div className={styles.slider_card_body}>
        <div className={styles.slider_card_title}>
          {item.name} ({item.size}ml)
        </div>
        <div className={styles.price}>€ {item.price.toFixed(2)}</div>
        <Link to={`/product-details/${item._id}`}>
          <button className={styles.button}>Buy Now</button>{' '}
        </Link>
      </div>
    </div>
  )
}

export default PopularProductItem
