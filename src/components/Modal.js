import React from "react";
import CartItem from "./CartItem";
import classes from "./Modal.module.css";
import TotalAmount from "./TotalAmount";
import Card from "./UI/Card";

const Modal = (props) => {
  let totalAmount = 0;
  return (
    <section className={classes.modal}>
      <span className={classes.backdrop} onClick={props.onRemoveModal}></span>
      <Card className={classes.cart}>
        <ul className={classes["cart-items-list"]}>
          {props.cartList.map((item, index) => {
            totalAmount += item.price * item.quantity;
            return (
              <CartItem
                cartItem={item}
                key={item.id}
                itemId={index}
                onMinusCartItem={props.onMinusItem}
                onPlusCartItem={props.onPlusItem}
              ></CartItem>
            );
          })}
        </ul>
        <TotalAmount
          onRemoveModal={props.onRemoveModal}
          total={totalAmount.toFixed(2)}
        />
      </Card>
    </section>
  );
};
export default Modal;
