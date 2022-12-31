import React from "react";
import classes from "./CartItem.module.css";

const CardItem = () => {
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2 className={classes.name}>Sushi</h2>
        <div className={classes["summary"]}>
          <span className={classes.price}>$price</span>
          <span className={classes.amount}>x 2</span>
        </div>
      </div>
      <div className={classes["actions"]}>
        <button type="button">-</button>
        <button type="button">+</button>
      </div>
    </li>
  );
};

export default CardItem;
