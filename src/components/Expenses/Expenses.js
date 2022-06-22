import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import Filter from "../UI/Filter";
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
      {filteredData.length === 0 ? (
        <p>no expenses found.</p>
      ) : (
        filteredData.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))
      )}
    </Card>
  );
};
export default Expenses;
