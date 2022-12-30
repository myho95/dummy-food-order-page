import React from "react";
import Card from "./UI/Card";
import classes from "./Menu.module.css";

const Menu = () => {
  return (
    <Card className={classes.menu}>
      <div className={classes["cart-item"]}>
        <div className={classes["cart-item__desc"]}>
          <h4>Sushi</h4>
          <p className={classes["description"]}>Description</p>
          <p className={classes["price"]}>$Price</p>
        </div>
        <div className={classes["cart-item__add-item"]}>
          <div className={classes["input-item"]}>
            <label htmlFor="">Amount</label>
            <input type="number" min="1" step="1" />
          </div>
          <button type="button" className={classes.button}>
            + Add
          </button>
        </div>
      </div>
      <hr></hr>
    </Card>
  );
};

export default Menu;
