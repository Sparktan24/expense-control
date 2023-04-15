import React from "react";
import Expense from "./Expense";

const ExpenseList = ({ expenses }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{expenses.length ? "Expenses" : "No expenses yet"}</h2>

      {expenses.map((expense) => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

export default ExpenseList;
