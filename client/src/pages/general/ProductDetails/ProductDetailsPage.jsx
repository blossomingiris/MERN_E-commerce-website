import styles from './ProductDetailsPage.module.scss'
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { FaPinterest } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/actions/cartActions'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function ProductDetailsPage() {
  //get product id from url endpoint
  const { id } = useParams()

  //redux state management
  const dispatch = useDispatch()

  const [quantity, setQuantity] = useState(1)
  const [product, setProduct] = useState([])
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const addToCartHandler = () => {
    dispatch(addToCart(id, quantity))
    window.alert('Product was added successfully! Please check your cart.')
  }

  const getProductDetails = async (id) => {
    const { data } = await axios.get(`/api/products/get-one/${id}`)
    return data
  }

  useEffect(() => {
    getProductDetails(id)
      .then((data) => {
        setProduct({
          name: data.name,
          price: data.price.toFixed(2),
          size: data.size,
          desc: data.description,
          image: data.images[1].path,
          count: data.count,
        })
      })
      .catch((err) => console.log(err))
  }, [id])

  console.log(product)

  return (
    <section className={styles.container}>
      {product.length !== 0 ? (
        <>
          <div className={styles.container_left}>
            <div className={styles.images_container}>
              <img
                className={styles.main_image}
                src={require(`../../../assets/products/${product.image}`)}
                alt={product.name}
              />
              {/* <div className={styles.images_details_container}>
		<img className={styles.image_details} src={image} alt='' />
		<img className={styles.image_details} src={image} alt='' />
	</div> */}
            </div>
          </div>
          <div className={styles.container_right}>
            <div className={styles.info_container}>
              <h2 className={styles.title}>
                {product.name} ({product.size}ml)
              </h2>
              <p className={styles.price}>€ {product.price}</p>

              <div className={styles.quantity_container}>
                <h5>{product.count > 0 ? 'In Stock' : 'Out of Stock'}</h5>
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
                {product.count === 0 ? (
                  <button
                    className={styles.button}
                    onClick={addToCartHandler}
                    disabled
                  >
                    Out of Stock
                  </button>
                ) : (
                  <button className={styles.button} onClick={addToCartHandler}>
                    Add to Cart
                  </button>
                )}
              </div>

              <div className={styles.desc_container}>
                <h4 className={styles}>Product details</h4>
                <p>{product.desc}</p>
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
        </>
      ) : (
        <div className={styles.load_container}>
          <h3>Loading...</h3>
        </div>
      )}
    </section>
  )
}

export default ProductDetailsPage
