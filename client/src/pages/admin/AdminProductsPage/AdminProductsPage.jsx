import { useEffect, useState } from 'react'
import { FaRegEdit, FaBan } from 'react-icons/fa'
import { logout } from '../../../redux/actions/userActions'
import { useDispatch } from 'react-redux'
import styles from './AdminProducts.module.scss'
import axios from 'axios'
import AdminLinks from '../../../components/AdminLinks/AdminLinks'
import { getListOfProducts } from './apiRequestGetListOfProducts'

function AdminProductsPage() {
  const [products, setProducts] = useState([])
  const [productDeleted, setProductDeleted] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    getListOfProducts()
      .then((res) => setProducts(res))
      .catch((error) => dispatch(logout))
  }, [productDeleted])

  const deleteProduct = async (productId) => {
    const { data } = await axios.delete(
      `/api/products/admin/delete-one/${productId}`
    )
    setProductDeleted(!productDeleted)
    if (data === 'product deleted') {
      alert('Product has been successfully deleted')
    }
    return data
  }

  const deleteHandler = (productId) => {
    if (
      window.confirm(
        'Are you sure you want to remove this product from the shop?'
      )
    ) {
      deleteProduct(productId)
    }
  }

  return (
    <section className={styles.container}>
      <AdminLinks />
      <div className={styles.container_right}>
        <h4 className={styles.title}>
          Products List (Found:
          {products.totalProducts && products.totalProducts} items)
        </h4>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Left in store</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.products?.map((item, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>€{item.price}</td>
                <td>{item.count}</td>
                <td>
                  <a href='#'>
                    <FaRegEdit />
                  </a>
                </td>
                <td onClick={() => deleteHandler(item._id)}>
                  <a href='#'>
                    <FaBan />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default AdminProductsPage
