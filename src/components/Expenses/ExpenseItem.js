import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { useState } from "react";

const ExpenseItem = (props) => {
 
  const [title,setTitle]=useState(props.title);
  const clickHandler = () => {
    setTitle(props.amount);
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.date} />
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>click me</button>
      </div>
    </Card>
  );
};
export default ExpenseItem;
