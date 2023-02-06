import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Card from "../UI/Card";
import CartItem from "./CartItem";
import classes from "./Modal.module.css";
import TotalAmount from "./TotalAmount";

const Modal = (props) => {
  const cartCtx = useContext(CartContext);
  let totalAmount = cartCtx.totalAmount;
  return (
    <section className={classes.modal}>
      <span className={classes.backdrop} onClick={props.onRemoveModal}></span>
      <Card className={classes.cart}>
        <ul className={classes["cart-items-list"]}>
          {cartCtx.items.map((item, index) => {
            return (
              <CartItem
                cartItem={item}
                key={item.id}
                itemId={index}
                onMinusCartItem={cartCtx.removeItem}
                onPlusCartItem={cartCtx.addItem}
              ></CartItem>
            );
          })}
        </ul>
        <TotalAmount onRemoveModal={props.onRemoveModal} total={totalAmount} />
      </Card>
    </section>
  );
};
export default Modal;
