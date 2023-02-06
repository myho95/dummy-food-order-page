import React from "react";
import classes from "./Menu.module.css";
import MealItem from "./MealItem";
import Card from "../UI/Card";

const Menu = (props) => {
  return (
    <Card className={classes.menu}>
      {props.mealsList.map((meal) => (
        <MealItem
          mealItem={meal}
          key={meal.id}
          onAddCartItem={props.onAddCart}
        ></MealItem>
      ))}
    </Card>
  );
};

export default Menu;
