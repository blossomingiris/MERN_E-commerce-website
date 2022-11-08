import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

//allows writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.

import thunk from 'redux-thunk'

import { cartReducer } from './reducers/cartReducer'
import { userRegisterLoginReducer } from './reducers/userReducer'

const reducer = combineReducers({
  cart: cartReducer,
  userRegisterLogin: userRegisterLoginReducer,
})

//read user data from localStorage/session storage
const userInfoInLocalStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : sessionStorage.getItem('userInfo')
  ? JSON.parse(sessionStorage.getItem('userInfo'))
  : {}

//read product details data from localStorage
const cartItemsInLocalStorage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : []

//save initial state
const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
    itemsCount: cartItemsInLocalStorage
      ? cartItemsInLocalStorage.reduce(
          (quantity, item) => Number(item.quantity) + quantity,
          0
        )
      : 0,
    cartSubtotal: cartItemsInLocalStorage
      ? cartItemsInLocalStorage.reduce(
          (price, item) => price + item.price * item.quantity,
          0
        )
      : 0,
  },
  userRegisterLogin: { userInfo: userInfoInLocalStorage },
}

const middleware = [thunk]
const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
