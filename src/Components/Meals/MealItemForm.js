import styles from "./MealItemForm.module.css";
import Input from "../UI/Input/Input";
import {useState} from 'react';

function MealItemForm(props) {


  const[enteredNumberOfItemsBought,setNumberOfItemsBought] = useState(1);

  const itemsAddedHandler = (event) =>{
      setNumberOfItemsBought(event.target.value);
  }
  const formSubmitHandler = event => {
    event.preventDefault();
    props.onCartItemAdd(enteredNumberOfItemsBought);
  };

  return (
    <form className={styles["form"]} onSubmit={formSubmitHandler}>
      <Input
        label="Amount"
        input={{
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          val : enteredNumberOfItemsBought,
          onChange : itemsAddedHandler
        }}
      ></Input>
      <button type="submit">Add</button>
    </form>
  );
}
export default MealItemForm;
