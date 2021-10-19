import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";

function Cart(props) {
  const cartItems = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
  ].map((item) => {
    return item.name;
  });

  return (
    <Modal onCancelClick = {props.onCancelClick}>
      <div className={styles['cart-items']}>{cartItems}</div>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>22</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onCancelClick}>Cancel</button>
        <button>Order</button>
      </div>
    </Modal>
  );
}
export default Cart;
