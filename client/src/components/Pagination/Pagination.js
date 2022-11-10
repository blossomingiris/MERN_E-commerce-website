import styles from './Pagination.module.scss'
import { Link } from 'react-router-dom'

function Pagination({
  onChangePage,
  searchQuery,
  pageNumber,
  paginationLinks,
}) {
  //path for url addresses
  const search = searchQuery ? `search/${searchQuery}/` : ''
  const url = `/products/${search}`

  return (
    <ul className={styles.pagination}>
      {[...Array(paginationLinks).keys()].map((page) => (
        <Link key={page + 1} to={`${url}${page + 1}`}>
          {' '}
          <li className={styles.page_item}>
            <div className={styles.page_link}>{page + 1}</div>
          </li>
        </Link>
      ))}
    </ul>
  )
}

export default Pagination
