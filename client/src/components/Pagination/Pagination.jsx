import styles from './Pagination.module.scss'
import { Link } from 'react-router-dom'

function Pagination({ searchQuery, paginationLinks, pageNumber }) {
  //path for url addresses
  const search = searchQuery ? `search/${searchQuery}/` : ''
  const url = `/products/${search}`

  return (
    <ul className={styles.pagination}>
      {[...Array(paginationLinks).keys()].map((page, idx) => (
        <Link key={idx} to={`${url}${page + 1}`}>
          <li>
            <div
              className={
                page === pageNumber - 1
                  ? styles.page_link_active
                  : styles.page_link
              }
            >
              {page + 1}
            </div>
          </li>
        </Link>
      ))}
    </ul>
  )
}

export default Pagination
