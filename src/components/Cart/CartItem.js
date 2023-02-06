import React from "react";
import classes from "./CartItem.module.css";

const CardItem = (props) => {
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
        <button
          type="button"
          onClick={props.onMinusCartItem.bind(
            null,
            props.cartItem,
            props.cartItem.id
          )}
        >
          -
        </button>
        <button
          type="button"
          onClick={props.onPlusCartItem.bind(null, props.cartItem, 1)}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CardItem;
