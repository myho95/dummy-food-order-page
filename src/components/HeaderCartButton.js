import React, { useState } from "react";
import ReactDOM from "react-dom";
import classes from "./HeaderCartButton.module.css";
import Modal from "./Modal";

const HeaderCartButton = () => {
  const [isShowCart, setIsShowCart] = useState(false);
  const modalHandler = () => {
    setIsShowCart(true);
  };
  return (
    <button className={classes["button"]} onClick={modalHandler}>
      <i className={`${classes.icon} fas fa-shopping-cart`}></i>
      Your Cart
      <span className={classes.badge}>0</span>
      {isShowCart &&
        ReactDOM.createPortal(
          <Modal></Modal>,
          document.getElementById("overlay-root")
        )}
    </button>
  );
};

export default HeaderCartButton;
