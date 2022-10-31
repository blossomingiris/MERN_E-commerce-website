import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

//allows writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.

import thunk from 'redux-thunk'

import { counterReducer } from './reducers/cartReducer'
import { userRegisterLoginReducer } from './reducers/userReducer'

const reducer = combineReducers({
  cart: counterReducer,
  userRegisterLogin: userRegisterLoginReducer,
})

//take user data from localStorage
const userInfoInLocalStorage = JSON.parse(localStorage.getItem('userInfo'))

//save initial state
const INITIAL_STATE = {
  cart: {
    value: 0,
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
