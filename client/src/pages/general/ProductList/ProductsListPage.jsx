import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MdSearch } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import styles from './ProductListPage.module.scss'
import ProductItem from '../../.././components/ProductItem/ProductItem'
import axios from 'axios'
import Pagination from '../../../components/Pagination/Pagination'

function ProductsListPage() {
  const [products, setProducts] = useState([])
  const [totalProducts, setTotalProducts] = useState(null)
  const navigate = useNavigate()

  //pagination state
  const [paginationLinks, setPaginationLinks] = useState(null)
  const [pageNumber, setPageNumber] = useState(null)
  const { pageNumParam } = useParams() || 1

  const { searchQuery } = useParams() || ''
  //search query
  const [query, setSearchQuery] = useState('')
  const queryHandler = (e) => {
    if (e.keyCode && e.keyCode === 13) return
    e.preventDefault()
    //if search query exist navigate to the page with query result
    if (query.trim()) {
      navigate(`/products/search/${query}`)
    } else {
      navigate('/products')
    }
  }

  //sort products (default state most seeling products)
  const [sortOption, setSortOption] = useState('sales_-1')

  //filter products

  //dynamic url handle different scenarios (search, sorting, pagination)

  const getProducts = async () => {
    const search = searchQuery ? `search/${searchQuery}` : ''
    // const url = `/api/products/${search}?pageNum=${pageNumParam}&sort=${sortOption}`
    // console.log(sortOption)
    const url = `/api/products/${search}?pageNumber=${pageNumParam}&sort=${sortOption}`
    const { data } = await axios.get(url)
    return data
  }

  useEffect(() => {
    getProducts(sortOption, pageNumParam, searchQuery)
      .then((products) => {
        setProducts(products.products)
        setPaginationLinks(products.paginationLinksNumber)
        setPageNumber(products.pageNumber)
        setTotalProducts(products.totalProducts)
        // console.log(products)
      })
      .catch((err) => console.log(err))
  }, [sortOption, pageNumParam, searchQuery])

  //initial state  or range input
  const [filterRanger, setFilterRange] = useState(7)
  const handleOnChange = (e) => setFilterRange(e.target.value)

  return (
    <section className={styles.container}>
      <h4 className={styles.title}>Search: {totalProducts} Products</h4>
      <h4 className={styles.desc}>Store / Search: {totalProducts} matches</h4>
      <div className={styles.sort_by}>
        <h4 className={styles.desc}>Sort by:</h4>
        <select
          className={styles.form_control}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value='sales_-1'>Most Popular</option>
          <option value='price_1'>Price (Lowest to Highest)</option>
          <option value='price_-1'>Price (Highest to Lowest)</option>
          <option value='name_1'>Name (A to Z)</option>
          <option value='name_-1'>Name (Z to A)</option>
        </select>
      </div>
      <div className={styles.filter_container}>
        <div>
          <ul className={styles.filter_left}>
            <li>
              <form className={styles.search_form}>
                <label className={styles.search_desc}>Search</label>
                <input
                  type='text'
                  placeholder='Search for an item...'
                  className={styles.search_input}
                  onKeyUp={queryHandler}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button>
                  {' '}
                  <MdSearch
                    className={styles.search_icon}
                    onClick={queryHandler}
                  />
                </button>
              </form>
            </li>
            <li>
              {' '}
              <div className={styles.search_desc}>Availability</div>
              <div className={styles.checkbox_container}>
                <input
                  type='checkbox'
                  className={styles.checkbox_input}
                  id='checkbox'
                />
                <label for='checkbox'>
                  In Stock
                  <span className={styles.checkbox}></span>
                </label>
                <div>50</div>
              </div>
            </li>
            <li>
              {' '}
              <div className={styles.search_desc}>Price </div>
              <div className={styles.price_range_container}>
                {' '}
                <input
                  type='range'
                  min={7}
                  max={200}
                  value={filterRanger}
                  className={styles.price_range_slider}
                  onChange={handleOnChange}
                />
                <div className='value'>€ {filterRanger}</div>
              </div>
            </li>
            <li>
              <div className={styles.search_desc}>Category</div>
              <div className={styles.checkbox_container}>
                <input
                  type='checkbox'
                  className={styles.checkbox_input_category}
                  id='checkbox-home'
                />
                <label for='checkbox-home'>
                  Home
                  <span className={styles.checkbox_category}></span>
                </label>
              </div>
              <div className={styles.checkbox_container}>
                <input
                  type='checkbox'
                  className={styles.checkbox_input_category}
                  id='checkbox-hands'
                />
                <label for='checkbox-hands'>
                  Hands
                  <span className={styles.checkbox_category}></span>
                </label>
              </div>
              <div className={styles.checkbox_container}>
                <input
                  type='checkbox'
                  className={styles.checkbox_input_category}
                  id='checkbox-perfume'
                />
                <label for='checkbox-perfume'>
                  Perfume
                  <span className={styles.checkbox_category}></span>
                </label>
              </div>
              <div className={styles.checkbox_container}>
                <input
                  type='checkbox'
                  className={styles.checkbox_input_category}
                  id='checkbox-bath'
                />
                <label for='checkbox-bath'>
                  Bath
                  <span className={styles.checkbox_category}></span>
                </label>
              </div>
            </li>
            <li>
              <div className={styles.search_desc}>Fragrance Notes</div>
              <div className={styles.checkbox_container}>
                <input
                  type='checkbox'
                  className={styles.checkbox_input_category}
                  id='checkbox-fruity'
                />
                <label for='checkbox-fruity'>
                  Fruity
                  <span className={styles.checkbox_category}></span>
                </label>
              </div>
              <div className={styles.checkbox_container}>
                <input
                  type='checkbox'
                  className={styles.checkbox_input_category}
                  id='checkbox-floral'
                />
                <label for='checkbox-floral'>
                  Floral
                  <span className={styles.checkbox_category}></span>
                </label>
              </div>
              <div className={styles.checkbox_container}>
                <input
                  type='checkbox'
                  className={styles.checkbox_input_category}
                  id='checkbox-fresh'
                />
                <label for='checkbox-fresh'>
                  Fresh
                  <span className={styles.checkbox_category}></span>
                </label>
              </div>
              <div className={styles.checkbox_container}>
                <input
                  type='checkbox'
                  className={styles.checkbox_input_category}
                  id='checkbox-oriental'
                />
                <label for='checkbox-oriental'>
                  Oriental
                  <span className={styles.checkbox_category}></span>
                </label>
              </div>
              <div className={styles.checkbox_container}>
                <input
                  type='checkbox'
                  className={styles.checkbox_input_category}
                  id='checkbox-woody'
                />
                <label for='checkbox-woody'>
                  Woody
                  <span className={styles.checkbox_category}></span>
                </label>
              </div>
            </li>
          </ul>

          <span>Sort By</span>
          <div className={styles.button_group}>
            <button>Filter</button>
            <button>Clear </button>
          </div>
        </div>
        <div className={styles.filter_right}>
          <div className={styles.product_items_container}>
            {products.map((product) => (
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
      </div>
      <div className={styles.pagination_container}>
        <Pagination
          searchQuery={searchQuery}
          paginationLinks={paginationLinks}
          pageNumber={pageNumber}
        />
      </div>
    </section>
  )
}

export default ProductsListPage
