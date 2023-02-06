import React from "react";
import classes from "./Header.module.css";
import mainImage from "../../images/main-image.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <section className="header-contain">
        <header className={classes.header}>
          <div>
            <h1>ReactMeals</h1>
          </div>
          <HeaderCartButton
            cartCount={props.cartItemCount}
            onModalHandler={props.onModalHandler}
            isAnimated={props.isBump}
          ></HeaderCartButton>
        </header>
        <div className={classes["main-image"]}>
          <img src={mainImage} alt="main background" />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Header;
