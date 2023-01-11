import React, { useRef } from "react";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const inputItem = useRef();
  const submitHandle = (event) => {
    event.preventDefault();
    props.onAddCartItem(inputItem.current?.value || "1", props.mealItem);
  };
  return (
    <>
      <div className={classes["cart-item"]}>
        <div className={classes["cart-item__desc"]}>
          <h4>{props.mealItem.name}</h4>
          <p className={classes["description"]}>{props.mealItem.description}</p>
          <p className={classes["price"]}>${props.mealItem.price}</p>
        </div>
        <form
          className={classes["cart-item__add-item"]}
          onSubmit={submitHandle}
        >
          <div className={classes["input-item"]}>
            <label htmlFor="">Amount</label>
            <input
              type="number"
              min="1"
              step="1"
              ref={inputItem}
              defaultValue="1"
            />
          </div>
          <button type="submit" className={classes.button}>
            + Add
          </button>
        </form>
      </div>
      <hr></hr>
    </>
  );
};

export default MealItem;
