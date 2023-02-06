import React, { useContext, useRef } from "react";
import classes from "./MealItem.module.css";
import CartContext from "../../store/cart-context";

const MealItem = (props) => {
  const Ctx = useContext(CartContext);
  const inputItem = useRef();
  const submitHandle = (event) => {
    event.preventDefault();
    // props.onAddCartItem(inputItem.current?.value || "1", props.mealItem);
    const amount = Number(inputItem.current?.value);
    Ctx.addItem(props.mealItem, amount);
  };
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default MealItem;
