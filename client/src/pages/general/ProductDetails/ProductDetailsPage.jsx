import React from 'react'
import styles from './ProductDetailsPage.module.scss'
import image from '../../.././assets/popular_products/product_1.jpg'
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { FaPinterest } from 'react-icons/fa'

function ProductDetailsPage() {
  return (
    <section className={styles.container}>
      <div className={styles.container_left}>
        <div className={styles.images_container}>
          <img className={styles.main_image} src={image} alt='' />
          <div className={styles.images_details_container}>
            <img className={styles.image_details} src={image} alt='' />
            <img className={styles.image_details} src={image} alt='' />
          </div>
        </div>
      </div>
      <div className={styles.container_right}>
        <div className={styles.info_container}>
          <h2 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className={styles.price}>$50.00</p>

          <div className={styles.quantity_container}>
            <h5>In Stock</h5>
            <div className={styles.quantity_info}>
              <h4>Quantity:</h4>
              <input
                className={styles.quantity}
                type='number'
                placeholder='1'
                maxLength='10'
                min='1'
              />
            </div>
            <button className={styles.button}>Add to Bag</button>
          </div>

          <div className={styles.desc_container}>
            <h4 className={styles}>Product details</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              dolore animi dolores cupiditate expedita nostrum eaque
              voluptatibus tempore deserunt odit?
            </p>
          </div>
          <div className={styles.desc_container}>
            <h4>Share this product with your friends</h4>
            <div className={styles.icons_group}>
              <span className={styles.icon}>
                <AiFillFacebook />
                <p>Share</p>
              </span>
              <span className={styles.icon}>
                <AiOutlineTwitter />
                <p>Twit</p>
              </span>
              <span className={styles.icon}>
                <FaPinterest />
                <p>Pin it</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetailsPage
