import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import Button from "../UI/Button/Button";
import {useContext,useEffect,useState} from 'react';
import CartContext from "../../store/cart-context";



function HeaderCartButton(props) {
    const ctx = useContext(CartContext);

    const [buttonClasses,setButtonClasses] = useState(styles.button);
    

    useEffect(()=>{
      if(ctx.items.length > 0){
        setButtonClasses(styles.button + " " + styles.bump);  
      }
      const timer = setTimeout(()=>{
        setButtonClasses(styles.button);
      },300);
      return ()=>{
        clearTimeout(timer);
      }
    },[ctx.items])
  return (
    <Button className={buttonClasses} onClick={props.onCartClick}>
      <span className={styles.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>{ctx.items.length}</span>
    </Button>
  );
}
export default HeaderCartButton;
