import * as actionTypes from '../constants/cartConsts'

export const addToCart = () => (dispatch) => {
  dispatch({
    type: actionTypes.ADD_TO_CART,
    someValue: 0,
  })
}
