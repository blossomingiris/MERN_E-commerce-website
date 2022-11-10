import { LOGIN_USER, LOGOUT_USER } from '../constants/userConsts'
import axios from 'axios'

//user login action
export const setReduxUserState = (userCreated) => (dispatch) => {
  dispatch({
    type: LOGIN_USER,
    payload: userCreated,
  })
}

//user logout action
//navigate user/admin to login page after logout
//delete cookies and user data, cart data from local storage

export const logout = () => (dispatch) => {
  //Navigate form react-route-dom doesn't work correctly
  document.location.href = '/login'
  axios.get('/api/logout')
  localStorage.removeItem('userInfo')
  sessionStorage.removeItem('userInfo')
  localStorage.removeItem('cart')
  dispatch({ type: LOGOUT_USER })
}
