import React from 'react'
import styles from './ProductListPage.module.scss'
import ProductItem from '../../.././components/ProductItem/ProductItem'

function ProductsListPage() {
  return (
    <section className={styles.container}>
      <h4 className={styles.title}>Search Products</h4>
      <h4 className={styles.desc}>Store / Search: 100 matches</h4>
      <div className={styles.sort_by}>
        <h4 className={styles.desc}>Sort by:</h4>
        <select className={styles.form_control}>
          <option value='rating_-1'>Most Popular</option>
          <option value='price_1'>Price [Lowest to Highest]</option>
          <option value='price_-1'>Price [Highest to Lowest]</option>
          <option value='name_1'>Name [A to Z]</option>
          <option value='name_-1'>Name [Z to A]</option>
        </select>
      </div>
      <div className={styles.filter_container}>
        <div className={styles.filter_left}>
          <div className={styles.search_form}>
            <span>Search</span>
            <input type='text' placeholder='Search for an item...' />
          </div>

          <span>Availability</span>

          <div>
            <span>Price</span>
          </div>

          <span>Category</span>
          <span>Sort By</span>
          <div className={styles.button_group}>
            <button>Filter</button>
            <button>Clear Filter</button>
          </div>
        </div>
        <div className={styles.filter_right}>
          <div className={styles.product_items_container}>
            {Array.from({ length: 8 }).map((index) => (
              <ProductItem key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.pagination}>Pagination</div>
    </section>
  )
}

export default ProductsListPage
