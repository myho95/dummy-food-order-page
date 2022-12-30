import React from "react";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <>
      <div className={classes["cart-item"]}>
        <div className={classes["cart-item__desc"]}>
          <h4>{props.mealItem.name}</h4>
          <p className={classes["description"]}>{props.mealItem.description}</p>
          <p className={classes["price"]}>${props.mealItem.price}</p>
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
    </>
  );
};

export default MealItem;
