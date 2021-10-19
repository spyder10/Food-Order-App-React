import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartContextProvider from "./store/CartContextProvider";



function App() {

  const[showCart,setShowCart] = useState(false);
  const onCartClickHandler = () =>{
    setShowCart(true);
  }

  const onCancelClickHandler = () => {
    setShowCart(false);
  }
  return (
    <CartContextProvider>
      <Header onCartClick = {onCartClickHandler}></Header>
      <main>
        {showCart && <Cart onCancelClick={onCancelClickHandler}></Cart>}
        <Meals></Meals>
      </main>
    </CartContextProvider>
  );
}

export default App;
