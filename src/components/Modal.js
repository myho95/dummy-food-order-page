import React from "react";
import CartItem from "./CartItem";
import classes from "./Modal.module.css";
import TotalAmount from "./TotalAmount";
import Card from "./UI/Card";

const Modal = (props) => {
  return (
    <section className={classes.modal}>
      <span
        className={classes.backdrop}
        onClick={props.onRemoveModalHandle}
      ></span>
      <Card className={classes.cart}>
        <ul className={classes["cart-items-list"]}>
          <CartItem></CartItem>
        </ul>
        <TotalAmount onRemoveModal={props.onRemoveModalHandle}></TotalAmount>
      </Card>
    </section>
  );
};
export default Modal;
