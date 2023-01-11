import React, { useEffect, useState } from "react";
import classes from "./TotalAmount.module.css";
import Button from "./UI/Button";
const TotalAmount = (props) => {
  const [isShowOrderButton, setIsShowOrderButton] = useState(false);
  const { total } = props;
  useEffect(() => {
    if (total != 0) {
      setIsShowOrderButton(true);
    } else {
      setIsShowOrderButton(false);
    }
  }, [total]);
  console.log(total);
  return (
    <div>
      <div className={classes["total-amount"]}>
        <h2>Total Amount</h2>
        <span>${props.total}</span>
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
