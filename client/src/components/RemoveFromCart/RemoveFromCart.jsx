import styles from './RemoveFromCart.module.scss'
import { MdClose } from 'react-icons/md'

function RemoveFromCart({
  productID,
  quantity,
  price,
  removeProductFromCartHandler = false,
}) {
  return (
    <button
      className={styles.remove_button}
      onClick={
        removeProductFromCartHandler
          ? () => removeProductFromCartHandler(productID, quantity, price)
          : undefined
      }
    >
      <MdClose className={styles.icon}></MdClose>
    </button>
  )
}

export default RemoveFromCart
