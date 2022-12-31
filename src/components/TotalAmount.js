import React from "react";
import classes from "./TotalAmount.module.css";
import Button from "./UI/Button";
const TotalAmount = (props) => {
  return (
    <div>
      <div className={classes["total-amount"]}>
        <h2>Total Amount</h2>
        <span>$33.0</span>
      </div>
      <div className={classes["actions"]}>
        <Button
          type="button"
          className={classes["close-button"]}
          onClick={props.onRemoveModal}
        >
          Close
        </Button>
        <Button type="button" className={classes["order-button"]}>
          Order
        </Button>
      </div>
    </div>
  );
};

export default TotalAmount;
