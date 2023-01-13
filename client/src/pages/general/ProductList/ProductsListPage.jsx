import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MdSearch } from 'react-icons/md'
import { useNavigate, Link } from 'react-router-dom'
import styles from './ProductListPage.module.scss'
import ProductItem from '../../.././components/ProductItem/ProductItem'
import axios from 'axios'
import Pagination from '../../../components/Pagination/Pagination'

function ProductsListPage() {
  const [products, setProducts] = useState([])
  const [totalProducts, setTotalProducts] = useState(null)
  const [categoryQuery, setCategoryQuery] = useState([])
  //sort products (default state is most seeling products)
  const [sortOption, setSortOption] = useState('sales_-1')
  const [attributes, setAttributes] = useState([])
  const [filter, setFilter] = useState('')
  const [price, setPrice] = useState(200)
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

  //dynamic url handle different scenarios (search, sorting, pagination)
  const getProducts = async () => {
    const search = searchQuery ? `search/${searchQuery}` : ''
    const url = `/api/products/${search}?pageNumber=${pageNumParam}&${filter}&sort=${sortOption}`
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
      })
      .catch((err) => console.log(err))
  }, [sortOption, pageNumParam, searchQuery, filter])

  //initial state for price range input

  const handleOnChange = (e) => setPrice(e.target.value)

  //filter query for products and replace ',' with characters @, ~
  let filterURL = [
    ['price', price],
    ['category', [categoryQuery.join('~')]],
    ['attrs', [attributes.join('@')]],
  ]

  //convert query for products in correct format:
  //price=200&sort=price_-1&category=&attrs=notes-woody-fresh
  let filterHandler = function (array) {
    let result = array
      .join('&')
      .replace(/,/g, '=')
      .replace(/~/g, ',')
      .replace(/@/g, '-')
    setFilter(result)
  }

  const categoryQueryHandler = (e) => {
    let uncheckedCheckbox = categoryQuery.filter(
      (item) => item !== e.target.value
    )
    e.target.checked
      ? setCategoryQuery([...categoryQuery, e.target.value])
      : setCategoryQuery(uncheckedCheckbox)
  }

  const attributesHandler = (e) => {
    let uncheckedCheckbox = attributes.filter((item) => item !== e.target.value)
    e.target.checked
      ? setAttributes(['notes', ...attributes, e.target.value])
      : setAttributes(uncheckedCheckbox)
  }

  //reset all filters
  const removeFilterHandler = () => {
    setAttributes([])
    setCategoryQuery([])
    setPrice(200)
    document
      .querySelectorAll('input[type=checkbox]')
      .forEach((el) => (el.checked = false))
  }

  return (
    <section className={styles.container}>
      <h4 className={styles.title}>Search: {totalProducts} Products</h4>
      <h4 className={styles.desc}>
        <Link to='/products'>Store</Link> / Search: {totalProducts} matches
      </h4>
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
              <div className={styles.search_desc}>Price </div>
              <div className={styles.price_range_container}>
                {' '}
                <input
                  type='range'
                  min={7}
                  max={200}
                  value={price}
                  className={styles.price_range_slider}
                  onChange={handleOnChange}
                />
                <div className='value'>€ {price}</div>
              </div>
            </li>
            <li>
              <div className={styles.search_desc}>Category</div>
              <div className={styles.checkbox_container}>
                <input
                  type='checkbox'
                  className={styles.checkbox_input_category}
                  id='checkbox-home'
                  value='Home'
                  onClick={categoryQueryHandler}
                />
                <label htmlFor='checkbox-home'>
                  Home
                  <span className={styles.checkbox_category}></span>
                </label>
              </div>
              <div className={styles.checkbox_container}>
                <input
                  type='checkbox'
                  className={styles.checkbox_input_category}
                  id='checkbox-hands'
                  value='Hands'
                  onClick={categoryQueryHandler}
                />
                <label htmlFor='checkbox-hands'>
                  Hands
                  <span className={styles.checkbox_category}></span>
                </label>
              </div>
              <div className={styles.checkbox_container}>
                <input
                  type='checkbox'
                  className={styles.checkbox_input_category}
                  id='checkbox-perfume'
                  value='Perfume'
                  onClick={categoryQueryHandler}
                />
                <label htmlFor='checkbox-perfume'>
                  Perfume
                  <span className={styles.checkbox_category}></span>
                </label>
              </div>
              <div className={styles.checkbox_container}>
                <input
                  type='checkbox'
                  className={styles.checkbox_input_category}
                  id='checkbox-bath'
                  value='Bath'
                  onClick={categoryQueryHandler}
                />
                <label htmlFor='checkbox-bath'>
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
                  value='fruity'
                  onClick={attributesHandler}
                />
                <label htmlFor='checkbox-fruity'>
                  Fruity
                  <span className={styles.checkbox_category}></span>
                </label>
              </div>
              <div className={styles.checkbox_container}>
                <input
                  type='checkbox'
                  className={styles.checkbox_input_category}
                  id='checkbox-floral'
                  value='floral'
                  onClick={attributesHandler}
                />
                <label htmlFor='checkbox-floral'>
                  Floral
                  <span className={styles.checkbox_category}></span>
                </label>
              </div>
              <div className={styles.checkbox_container}>
                <input
                  type='checkbox'
                  className={styles.checkbox_input_category}
                  id='checkbox-fresh'
                  value='fresh'
                  onClick={attributesHandler}
                />
                <label htmlFor='checkbox-fresh'>
                  Fresh
                  <span className={styles.checkbox_category}></span>
                </label>
              </div>
              <div className={styles.checkbox_container}>
                <input
                  type='checkbox'
                  className={styles.checkbox_input_category}
                  id='checkbox-oriental'
                  value='oriental'
                  onClick={attributesHandler}
                />
                <label htmlFor='checkbox-oriental'>
                  Oriental
                  <span className={styles.checkbox_category}></span>
                </label>
              </div>
              <div className={styles.checkbox_container}>
                <input
                  type='checkbox'
                  className={styles.checkbox_input_category}
                  id='checkbox-woody'
                  value='woody'
                  onClick={attributesHandler}
                />
                <label htmlFor='checkbox-woody'>
                  Woody
                  <span className={styles.checkbox_category}></span>
                </label>
              </div>
            </li>
          </ul>

          <span>Sort By</span>
          <div className={styles.button_group}>
            <button onClick={() => filterHandler(filterURL)}>Filter</button>
            <button onClick={removeFilterHandler}>Reset </button>
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
