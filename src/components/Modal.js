import React from "react";
import CardItem from "./CardItem";
import classes from "./Modal.module.css";
import TotalAmount from "./TotalAmount";
import Card from "./UI/Card";

const Modal = (props) => {
  return (
    <section className={classes.modal}>
      <Card className={classes.backdrop}>
        <ul className={classes["cart-items-list"]}>
          <CardItem></CardItem>
        </ul>
        <TotalAmount></TotalAmount>
      </Card>
    </section>
  );
};
export default Modal;
