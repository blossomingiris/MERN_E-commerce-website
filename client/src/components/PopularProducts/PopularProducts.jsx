import { Link } from 'react-router-dom'
import styles from './PopularProducts.module.scss'
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

// import arrow_l from '../../assets/other/arrow_left.png'
// import arrow_r from '../../assets/other/arrow_right.png'

import { popularProducts } from '../../data/data'
import PopularProductItem from './PopularProductItem/PopularProductItem'

function PopularProducts() {
  //product cards slider

  const handleScrollLeft = () => {
    let slider = document.getElementById('cards_slider')
    console.log('left')
    slider.scrollLeft = slider.scrollLeft - 300
  }

  const handleScrollRight = () => {
    let slider = document.getElementById('cards_slider')
    console.log('right')
    slider.scrollLeft = slider.scrollLeft + 300
  }

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
        </Link>{' '}
        <div className={styles.product_gallery_container}>
          <div className={styles.slider} id='cards_slider'>
            {popularProducts.map((item) => (
              <PopularProductItem item={item} key={item.id} />
            ))}
          </div>
          <div className={styles.slider_icons_container}>
            {' '}
            <BsArrowLeft
              className={styles.slider_icon_left}
              onClick={handleScrollLeft}
            />
            <BsArrowRight
              className={styles.slider_icon_right}
              onClick={handleScrollRight}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularProducts
