import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import mainImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Anime</h1>
        <HeaderCartButton onClickShow={props.onClickShow}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mainImage} alt="A table of delicious food!" />
      </div>
    </React.Fragment>
  );
};
export default Header;
