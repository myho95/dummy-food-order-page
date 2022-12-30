import React from "react";
import Card from "./UI/Card";
import classes from "./Menu.module.css";
import MealItem from "./MealItem";

const Menu = (props) => {
  return (
    <Card className={classes.menu}>
      {props.mealsList.map((meal) => (
        <MealItem mealItem={meal} key={meal.id}></MealItem>
      ))}
    </Card>
  );
};

export default Menu;
