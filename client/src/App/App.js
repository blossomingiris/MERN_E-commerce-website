import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartPage from '../pages/CartPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import ProductDetailsPage from '../pages/ProductDetailsPage'
import ProductsListPage from '../pages/ProductsListPage'
import SignUpPage from '../pages/SignUpPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsListPage />} />
        <Route path='/product-details' element={<ProductDetailsPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
