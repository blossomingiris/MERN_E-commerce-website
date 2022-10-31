import { LOGIN_USER, LOGOUT_USER } from '../constants/userConsts'

export const userRegisterLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        userInfo: action.payload,
      }
    case LOGOUT_USER:
      //clear state
      return {}
    default:
      return state
  }
}
