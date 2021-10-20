import classes from "./CartItem.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const CartItem = (props) => {
  const ctx = useContext(CartContext);

  const onRemove = () => {
    ctx.removeItem(props.item.id);
  };
  const onAdd = () => {
    ctx.addItem({
      name: props.item.name,
      description: props.item.description,
      price: props.item.price,
      numberOfItemsBought: 1,
      id: props.item.id,
    });
  };
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{props.item.price}</span>
          <span className={classes.amount}>
            x {props.item.numberOfItemsBought}
          </span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
