import React from "react";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <button className={classes["button"]}>
      <i className={`${classes.icon} fas fa-shopping-cart`}></i>
      Your Cart
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;
