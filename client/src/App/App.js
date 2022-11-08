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
import UserCartDetailsPage from '../pages/user/CartDetails/UserCartDetailsPage'
import UserOrderDetailsPage from '../pages/user/OrderDetails/UserOrderDetailsPage'

//admin routes

import AdminUsersPage from '../pages/admin/AdminUsersPage/AdminUsersPage'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import SuccessPayment from '../pages/general/Payment/SuccessPayment'
import ErrorPage from '../pages/general/ErrorPage/ErrorPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutUsPage />} />
        <Route path='/what-makes-us-different' element={<DifferencesPage />} />
        <Route path='/products' element={<ProductsListPage />} />
        <Route path='/product-details/:id' element={<ProductDetailsPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/checkout-success' element={<SuccessPayment />}></Route>
        <Route path='*' element={<ErrorPage />} />

        {/* user protected routes: */}
        <Route element={<ProtectedRoutes admin={false} />}>
          <Route path='/user' element={<UserProfilePage />} />
          <Route path='/user/my-orders' element={<UserOrdersPage />} />
          <Route
            path='/user/cart-details/:id'
            element={<UserCartDetailsPage />}
          />
          <Route
            path='/user/order-details/:id'
            element={<UserOrderDetailsPage />}
          />
        </Route>

        {/* admin protected routes: */}
        <Route element={<ProtectedRoutes admin={true} />}>
          <Route path='/admin/users' element={<AdminUsersPage />} />
        </Route>
      </Routes>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  )
}

export default App
