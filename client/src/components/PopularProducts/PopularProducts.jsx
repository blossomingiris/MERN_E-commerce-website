import styles from './PopularProducts.module.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getBestSellingProducts } from './apiRequestBestSellingProducts'
import PopularProductItem from './PopularProductItem/PopularProductItem'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import AOS from 'aos'
import 'aos/dist/aos.css'

function PopularProducts() {
  //product cards slider

  const [popularProducts, setPopularProducts] = useState([])

  const handleScrollLeft = () => {
    let slider = document.getElementById('cards_slider')
    slider.scrollLeft = slider.scrollLeft - 300
  }

  const handleScrollRight = () => {
    let slider = document.getElementById('cards_slider')
    slider.scrollLeft = slider.scrollLeft + 300
  }

  useEffect(() => {
    AOS.init({})
    getBestSellingProducts()
      .then((data) => setPopularProducts(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <section className={styles.popular_container}>
      <div className={styles.popular_container_wrapper}>
        <div data-aos='fade-down' data-aos-duration='2000'>
          {' '}
          <div className={styles.popular_title}>
            <h2>Your favorite scent can always be with you</h2>
          </div>
          <div className={styles.popular_desc}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              voluptatem.
            </p>
          </div>
        </div>
        <Link to='/products'>
          <button
            className={styles.popular_button}
            data-aos='fade-up'
            data-aos-duration='1500'
          >
            Shop Now
          </button>
        </Link>{' '}
        <div
          className={styles.product_gallery_container}
          data-aos='fade-up'
          data-aos-duration='2000'
        >
          <div className={styles.slider} id='cards_slider'>
            {popularProducts.map((item, idx) => (
              <PopularProductItem item={item} key={idx} />
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
