import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

function MealItem(props) {
  const ctx = useContext(CartContext);

  const onCartItemAddHandler = (numberOfItemsBought) => {
    ctx.addItem({
      name: props.meal.name,
      description: props.meal.description,
      price: props.meal.price,
      numberOfItemsBought: +numberOfItemsBought,
      id: props.meal.id,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={styles.description}>{props.meal.description}</div>
        <div className={styles.price}>{props.meal.price}</div>
      </div>
      <div>
        <MealItemForm onCartItemAdd={onCartItemAddHandler}></MealItemForm>
      </div>
    </li>
  );
}
export default MealItem;
