import React, { useState } from "react";
import ReactDOM from "react-dom";
import classes from "./HeaderCartButton.module.css";
import Modal from "./Modal";

const HeaderCartButton = () => {
  const [isShowCart, setIsShowCart] = useState(false);
  const modalHandler = () => {
    setIsShowCart(true);
  };
  const removeModalHandle = () => {
    setIsShowCart(false);
  };
  return (
    <React.Fragment>
      {isShowCart &&
        ReactDOM.createPortal(
          <Modal onRemoveModalHandle={removeModalHandle}></Modal>,
          document.getElementById("overlay-root")
        )}
      <button className={classes["button"]} onClick={modalHandler}>
        <i className={`${classes.icon} fas fa-shopping-cart`}></i>
        Your Cart
        <span className={classes.badge}>0</span>
      </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
