import DUMMY_MEALS from "./components/Dummy-meals";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "./components/Cart/Modal";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import Menu from "./components/Meals/Menu";
import CartProvider from "./store/CartProvider";

function App() {
  const [isShowCart, setIsShowCart] = useState(false);

  const modalHandler = () => {
    setIsShowCart(true);
  };
  const removeModalHandle = () => {
    setIsShowCart(false);
  };

  return (
    <CartProvider>
      {isShowCart &&
        ReactDOM.createPortal(
          <Modal onRemoveModal={removeModalHandle}></Modal>,
          document.getElementById("overlay-root")
        )}
      <Header onModalHandler={modalHandler} />
      <MealsSummary></MealsSummary>
      <Menu mealsList={DUMMY_MEALS}></Menu>
    </CartProvider>
  );
}

export default App;
