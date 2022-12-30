import React from "react";
import classes from "./TotalAmount.module.css";
import Button from "./UI/Button";
const TotalAmount = () => {
  return (
    <div className={classes["total-amount"]}>
      <div>
        <h2>Total Amount</h2>
        <span>$33.0</span>
      </div>
      <div>
        <Button type="button">Close</Button>
        <Button type="button">Order</Button>
      </div>
    </div>
  );
};

export default TotalAmount;
