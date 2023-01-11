import React from "react";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <React.Fragment>
      <button
        className={`${classes["button"]} ${props.isAnimated && classes.bump}`}
        onClick={props.onModalHandler}
      >
        <i className={`${classes.icon} fas fa-shopping-cart`}></i>
        Your Cart
        <span className={classes.badge}>{props.cartCount}</span>
      </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
