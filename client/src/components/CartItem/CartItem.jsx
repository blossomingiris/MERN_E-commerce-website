import styles from './CartItem.module.scss'
import RemoveFromCart from '../RemoveFromCart/RemoveFromCart'

function CartItem({
  item,
  changeCount = false,
  removeProductFromCartHandler = false,
}) {
  return (
    <li className={styles.li_cart_item}>
      <div className={styles.image_container}>
        <img
          src={require(`../../assets/products/${item.image.path}`)}
          alt={item.name}
          crossOrigin='anonymous'
        />
      </div>
      <div>{item.name}</div>
      <div className={styles.price}>${item.price.toFixed(2)}</div>
      <input
        onChange={
          changeCount
            ? (e) => changeCount(item.productID, e.target.value)
            : undefined
        }
        className={styles.options_container}
        value={item.quantity}
        type='number'
        placeholder='1'
        maxLength='20'
        min='1'
      />
      <RemoveFromCart
        removeProductFromCartHandler={removeProductFromCartHandler}
        productID={item.productID}
        quantity={item.quantity}
        price={item.price}
      />
    </li>
  )
}

export default CartItem
