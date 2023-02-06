import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import classes from "./TotalAmount.module.css";

const TotalAmount = (props) => {
  const [isShowOrderButton, setIsShowOrderButton] = useState(false);

  const { total } = props;

  useEffect(() => {
    if (total > 0) {
      setIsShowOrderButton(true);
    } else {
      setIsShowOrderButton(false);
    }
  }, [total]);
  const totalAmount = total > 0 ? total.toFixed(2) : 0;

  return (
    <div>
      <div className={classes["total-amount"]}>
        <h2>Total Amount</h2>
        <span>${totalAmount}</span>
      </div>
      <div className={classes["actions"]}>
        <Button
          type="button"
          className={classes["close-button"]}
          onClick={props.onRemoveModal}
        >
          Close
        </Button>
        {isShowOrderButton && (
          <Button type="button" className={classes["order-button"]}>
            Order
          </Button>
        )}
      </div>
    </div>
  );
};

export default TotalAmount;
