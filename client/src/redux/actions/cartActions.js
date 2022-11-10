import * as actionTypes from '../constants/cartConsts'
import axios from 'axios'

//when user clicks btn add to cart fetch data of particular product
export const addToCart =
  (productId, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/get-one/${productId}`)

    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: {
        productID: data._id,
        name: data.name,
        price: data.price,
        image: data.images[1] ?? null,
        count: data.count,
        quantity,
      },
    })

    //save product details data in local storage
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
  }

//remove item from cart
export const removeItemFromCart =
  (productID, quantity, price) => (dispatch, getState) => {
    dispatch({
      type: actionTypes.REMOVE_ITEM_FROM_CART,
      payload: { productID: productID, quantity: quantity, price: price },
    })
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
  }

//clear all cart items
export const clearCart = () => (dispatch) => {
  localStorage.removeItem('cart')
  dispatch({ type: actionTypes.REMOVE_ITEM_FROM_CART })
}
