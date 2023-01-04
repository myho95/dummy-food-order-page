import Header from "./components/Header";
import MealsSummary from "./components/MealsSummary";
import Menu from "./components/Menu";
import DUMMY_MEALS from "./components/Dummy-meals";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "./components/Modal";

function App() {
  const [countCartItem, setCountCartItem] = useState(0);
  const [cartItemsList, setCartItemsList] = useState([]);
  const [isShowCart, setIsShowCart] = useState(false);
  const modalHandler = () => {
    setIsShowCart(true);
  };
  const removeModalHandle = () => {
    setIsShowCart(false);
  };
  const addCartItemHandle = (amount, mealItem) => {
    setCountCartItem((prevAddCartItem) => prevAddCartItem + Number(amount));
    setCartItemsList((prev) => {
      let updateList = [...prev];
      let isExist = false;
      let updateListLength = updateList.length;
      if (updateListLength > 0) {
        for (let i = 0; i < updateListLength; i++) {
          if (updateList[i].id === mealItem.id) {
            updateList[i].quantity += Number(amount);
            isExist = true;
          }
        }
      }
      if (!isExist) {
        updateList.push({ ...mealItem, quantity: Number(amount) });
      }
      return updateList;
    });
  };
  const minusCartItemHandle = (itemId) => {
    setCartItemsList((prev) => {
      const updateList = [...prev];
      if (updateList[itemId].quantity === 1) {
        updateList.splice(itemId, itemId + 1);
        return updateList;
      }
      updateList[itemId].quantity--;
      return updateList;
    });
    setCountCartItem((prev) => prev - 1);
  };
  const plusCartItemHandle = (itemId) => {
    setCartItemsList((prev) => {
      const updateList = [...prev];
      updateList[itemId].quantity++;
      return updateList;
    });
    setCountCartItem((prev) => prev + 1);
  };

  return (
    <div className="App">
      {isShowCart &&
        ReactDOM.createPortal(
          <Modal
            onRemoveModal={removeModalHandle}
            cartList={cartItemsList}
            onMinusItem={minusCartItemHandle}
            onPlusItem={plusCartItemHandle}
          ></Modal>,
          document.getElementById("overlay-root")
        )}
      <Header cartItemCount={countCartItem} onModalHandler={modalHandler} />
      <MealsSummary></MealsSummary>
      <Menu mealsList={DUMMY_MEALS} onAddCart={addCartItemHandle}></Menu>
    </div>
  );
}

export default App;
