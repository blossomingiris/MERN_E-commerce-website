import styles from './ProductDetailsPage.module.scss'
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { FaPinterest } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../redux/actions/cartActions'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

function ProductDetailsPage() {
  //get product id from url endpoint
  const { id } = useParams()

  //redux state management
  // const cartItems = useSelector((state) => state.cart.cartItems)
  const dispatch = useDispatch()

  const [quantity, setQuantity] = useState(1)

  const addToCartHandler = () => {
    dispatch(addToCart(id, quantity))
    window.alert('Product was added successfully! Please check your cart.')
  }

  return (
    <section className={styles.container}>
      <div className={styles.container_left}>
        <div className={styles.images_container}>
          <img
            className={styles.main_image}
            // src={require(`../../../assets/products/${cartItems[0].image.path}`)}
            src={require('../../../assets/products/bath_salt_05.jpg')}
            alt=''
          />
          {/* <div className={styles.images_details_container}>
            <img className={styles.image_details} src={image} alt='' />
            <img className={styles.image_details} src={image} alt='' />
          </div> */}
        </div>
      </div>
      <div className={styles.container_right}>
        <div className={styles.info_container}>
          <h2 className={styles.title}>Lorem, ipsum.</h2>
          <p className={styles.price}>€ 50.00</p>

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
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <button className={styles.button} onClick={addToCartHandler}>
              Add to Bag
            </button>
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
