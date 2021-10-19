import CartContext from "./cart-context";
import {useState} from 'react';

function CartContextProvider (props) {

    const[cartItems,setCartItems] = useState([]);
    const[totalAmount,setTotalAmount] = useState(0);

    const addItemHandler = () => {}

    const removeItemHandler = () => {}

    return <CartContext.Provider value={{
        items : cartItems,
        totalAmount : totalAmount,
        addItem : addItemHandler,
        removeItem : removeItemHandler
    }
    }>
        {props.children}
    </CartContext.Provider>
}
export default CartContextProvider;