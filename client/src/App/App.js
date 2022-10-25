import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import CartPage from '../pages/general/Cart/CartPage'
import HomePage from '../pages/general/HomePage/HomePage'
import LoginPage from '../pages/general/Login/LoginPage'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ProductDetailsPage from '../pages/general/ProductDetails/ProductDetailsPage'
import ProductsListPage from '../pages/general/ProductList/ProductsListPage'
import SignUpPage from '../pages/general/SignUp/SignUpPage'
import AboutUsPage from '../pages/general/AboutUs/AboutUsPage'
import DifferencesPage from '../pages/general/Differences/DifferencesPage'

import ProtectedRoutes from '../other/ProtectedRoutes'

//user routes
import UserProfilePage from '../pages/user/UserProfilePage'
import UserOrdersPage from '../pages/user/OrdersPage/UserOrdersPage'
import UserCartDetailsPage from '../pages/user/UserCartDetailsPage'
import UserOrderDetailsPage from '../pages/user/UserOrderDetailsPage'

//admin routes

import AdminUsersPage from '../pages/admin/AdminEditUserPage'
import AdminEditUserPage from '../pages/admin/AdminEditUserPage'
import AdminProductsPage from '../pages/admin/AdminProductsPage'
import AdminCreateProductPage from '../pages/admin/AdminCreateProductPage'
import AdminEditProductPage from '../pages/admin/AdminEditProductPage'
import AdminOrdersPage from '../pages/admin/AdminOrdersPage'
import AdminOrderDetailsPage from '../pages/admin/AdminOrderDetailsPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutUsPage />} />
        <Route path='/what-makes-us-different' element={<DifferencesPage />} />
        <Route path='/products' element={<ProductsListPage />} />
        <Route path='/product-details' element={<ProductDetailsPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element="404. Sorry, this page does't exist" />

        {/* user protected routes: */}
        <Route element={<ProtectedRoutes admin={false} />}>
          <Route path='/user' element={<UserProfilePage />} />
          <Route path='/user/my-orders' element={<UserOrdersPage />} />
          <Route path='/user/cart-details' element={<UserCartDetailsPage />} />
          <Route
            path='/user/order-details'
            element={<UserOrderDetailsPage />}
          />
        </Route>

        {/* admin protected routes: */}
        <Route element={<ProtectedRoutes admin={true} />}>
          <Route path='/admin/users' element={<AdminUsersPage />} />
          <Route path='/admin/edit-user/:id' element={<AdminEditUserPage />} />
          <Route path='/admin/products' element={<AdminProductsPage />} />
          <Route
            path='/admin/create-new-product'
            element={<AdminCreateProductPage />}
          />
          <Route
            path='/admin/edit-product/:id'
            element={<AdminEditProductPage />}
          />
          <Route path='/admin/orders' element={<AdminOrdersPage />} />
          <Route
            path='/admin/order-details/:id'
            element={<AdminOrderDetailsPage />}
          />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
