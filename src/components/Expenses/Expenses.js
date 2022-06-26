import Card from "../UI/Card";
import Filter from "../UI/Filter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "../Chart/ExpensesChart";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredData = props.items.filter(
    (year) => year.date.getFullYear().toString() === filteredYear
  );
  return (
    <Card className="expenses">
      <h2>Let's get started!</h2>
      <Filter selectedYear={filteredYear} onYearChange={filterChangeHandler} />
      <ExpensesChart expenses={filteredData} />
      <ExpenseList items={filteredData} />
    </Card>
  );
};
export default Expenses;
