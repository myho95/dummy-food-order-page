import React, { useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updateItems = [...state.items];
    const exitingItem = updateItems.findIndex(
      (item) => item.id === action.item.id
    );
    if (exitingItem === -1) {
      updateItems.push({ ...action.item, quantity: action.amount });
    } else {
      updateItems[exitingItem]["quantity"] += action.amount;
    }
    const updateTotalQuantity = state.totalQuantity + action.amount;
    const updateTotalAmount =
      state.totalAmount + action.amount * action.item.price;
    return {
      totalAmount: updateTotalAmount,
      totalQuantity: updateTotalQuantity,
      items: updateItems,
    };
  }
  if (action.type === "REMOVE") {
    let updateItems = [...state.items];
    const removeItemIndex = updateItems.findIndex(
      (item) => item.id === action.id
    );
    const updateTotalQuantity = state.totalQuantity - 1;
    const updateTotalAmount = state.totalAmount - action.item.price;
    if (updateItems[removeItemIndex]["quantity"] === 1) {
      updateItems = updateItems.filter((item) => item.id !== action.id);
    } else {
      updateItems[removeItemIndex]["quantity"] -= 1;
    }
    return {
      totalAmount: updateTotalAmount,
      totalQuantity: updateTotalQuantity,
      items: updateItems,
    };
  }
  return state;
};

const CartProvider = (props) => {
  const initialState = {
    totalAmount: 0,
    totalQuantity: 0,
    items: [],
  };

  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

  const addCart = (cartItem, cartAmount) => {
    dispatchCartAction({ type: "ADD", item: cartItem, amount: cartAmount });
  };
  const removeCart = (cartItem, cartId) => {
    dispatchCartAction({ type: "REMOVE", item: cartItem, id: cartId });
  };
  const cartContext = {
    totalAmount: cartState.totalAmount,
    totalQuantity: cartState.totalQuantity,
    items: cartState.items,
    addItem: addCart,
    removeItem: removeCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
