import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [isAnimated, setIsAnimate] = useState(false);
  const { totalQuantity } = cartCtx;

  useEffect(() => {
    if (totalQuantity === 0) {
      return;
    }
    setIsAnimate(true);
    setTimeout(() => {
      setIsAnimate(false);
    }, 300);
  }, [totalQuantity]);

  return (
    <React.Fragment>
      <button
        className={`${classes["button"]} ${isAnimated && classes.bump}`}
        onClick={props.onModalHandler}
      >
        <i className={`${classes.icon} fas fa-shopping-cart`}></i>
        Your Cart
        <span className={classes.badge}>{cartCtx.totalQuantity}</span>
      </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
