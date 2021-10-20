import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultState = {
  items: [],
  totalAmount: 0,
};
const cartItemsStateReducer = (state, action) => {
  if (action.type === "ITEM_ADDED") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.val.id
    );

    if (existingCartItemIndex === -1) {
      return {
        items: state.items.concat(action.val),
        totalAmount:
          state.totalAmount + action.val.price * action.val.numberOfItemsBought,
      };
    } else {
      state.items[existingCartItemIndex] = {
        ...state.items[existingCartItemIndex],
        numberOfItemsBought:
          state.items[existingCartItemIndex].numberOfItemsBought +
          action.val.numberOfItemsBought,
      };
      return {
        items: [...state.items],
        totalAmount:
          state.totalAmount + action.val.price * action.val.numberOfItemsBought,
      };
    }
  }
  if (action.type === "ITEM_REMOVE") {
    
    
    let existingCartItemIndex = state.items.findIndex(item => item.id === action.val);
    let priceOfItemRemoved = state.items[existingCartItemIndex].price; 
    if(state.items[existingCartItemIndex].numberOfItemsBought > 1){
        state.items[existingCartItemIndex].numberOfItemsBought = state.items[existingCartItemIndex].numberOfItemsBought - 1;
    }
    else{
        state.items.splice(existingCartItemIndex,1);
    }
    return {items : [...state.items], totalAmount : state.totalAmount- priceOfItemRemoved}
  }
  return defaultState;
};

function CartContextProvider(props) {
  const [cartItems, dispatchCartItems] = useReducer(
    cartItemsStateReducer,
    defaultState
  );

  const addItemHandler = (item) => {
    dispatchCartItems({
      type: "ITEM_ADDED",
      val: item,
    });
  };

  const removeItemHandler = (id) => {
    dispatchCartItems({
      type: "ITEM_REMOVE",
      val: id,
    });
  };
  return (
    <CartContext.Provider
      value={{
        items: cartItems.items,
        totalAmount: cartItems.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
export default CartContextProvider;
