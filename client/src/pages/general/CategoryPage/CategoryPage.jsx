import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styles from './CategoryPage.module.scss'
import { quotes } from '../../../data/data'
import { getRandomQuote } from '../../../utils/randomQuote'
import axios from 'axios'
import ProductItem from '../../../components/ProductItem/ProductItem'

function CategoryPage() {
  const { name } = useParams()
  const [products, setProducts] = useState([])
  const [quote, setQuote] = useState([])

  //get products from specific category
  const getProducts = async () => {
    const { data } = await axios.get(`/api/products/category/${name}`)
    return data
  }

  useEffect(() => {
    getProducts()
      .then((products) => {
        setProducts(products.products)
        let randomQuote = getRandomQuote(quotes)
        setQuote(randomQuote)
      })
      .catch((err) => console.log(err))
  }, [])

  //get random quote

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.store_link_container}>
        <Link to='/products' className={styles.store_link}>
          {' '}
          <h4>Store</h4>
        </Link>
        <h4>/{name}</h4>
      </div>

      <div className={styles.quote_container}>
        <p className={styles.desc}>
          {quote.length !== 0 && products ? `"${quote.desc}"` : ''}
        </p>
        <p className={styles.desc}>{quote.author}</p>
      </div>

      <div className={styles.wrapper}>
        {' '}
        <div className={styles.product_items_container}>
          {products?.map((product) => (
            <ProductItem
              key={product._id}
              images={product.images}
              name={product.name}
              size={product.size}
              description={product.description}
              price={product.price}
              productID={product._id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryPage
