import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import Button from "../UI/Button/Button";
import {useContext} from 'react';
import CartContext from "../../store/cart-context";


function HeaderCartButton(props) {
    const ctx = useContext(CartContext);
  return (
    <Button className={styles.button} onClick={props.onCartClick}>
      <span className={styles.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>{ctx.items.length}</span>
    </Button>
  );
}
export default HeaderCartButton;
