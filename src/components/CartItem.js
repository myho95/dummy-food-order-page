import React from "react";
import classes from "./CartItem.module.css";

const CardItem = (props) => {
  const minusItemHandle = () => {
    props.onMinusCartItem(props.itemId);
  };
  const plusItemHandle = () => {
    props.onPlusCartItem(props.itemId);
  };
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2 className={classes.name}>{props.cartItem.name}</h2>
        <div className={classes["summary"]}>
          <span className={classes.price}>${props.cartItem.price}</span>
          <span className={classes.amount}>x {props.cartItem.quantity}</span>
        </div>
      </div>
      <div className={classes["actions"]}>
        <button type="button" onClick={minusItemHandle}>
          -
        </button>
        <button type="button" onClick={plusItemHandle}>
          +
        </button>
      </div>
    </li>
  );
};

export default CardItem;
