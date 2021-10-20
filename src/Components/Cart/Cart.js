import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import {useContext} from 'react';
import CartItem from "./CartItem"; 

function Cart(props) {
  const ctx = useContext(CartContext);
  const cartItems = ctx.items.map((item) => {
    return <CartItem item={item}></CartItem>
  });

  return (
    <Modal onCancelClick = {props.onCancelClick}>
      <div className={styles['cart-items']}>{cartItems}</div>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{ctx.totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onCancelClick}>Cancel</button>
        <button>Order</button>
      </div>
    </Modal>
  );
}
export default Cart;
