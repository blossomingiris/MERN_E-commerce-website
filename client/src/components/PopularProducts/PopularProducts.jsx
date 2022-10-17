import { Link } from 'react-router-dom'
import styles from './PopularProducts.module.scss'
import { popularProducts } from '../../data/data'
import PopularProductItem from './PopularProductItem/PopularProductItem'

function PopularProducts() {
  return (
    <section className={styles.popular_container}>
      <div className={styles.popular_container_wrapper}>
        <div className={styles.popular_title}>
          <h2>Your favorite scent can always be with you</h2>
        </div>
        <div className={styles.popular_desc}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            voluptatem.
          </p>
        </div>
        <Link to='/products'>
          <button className={styles.popular_button}>Shop Now</button>
        </Link>
        <div className={styles.product_gallery_container}>
          {popularProducts.map((item) => (
            <PopularProductItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularProducts
