import React from "react";

const ExpenseList = ({ expenses }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{expenses.length ? "Expenses" : "No expenses yet"}</h2>

      {expenses.map((expense) => (
        <Expense />
      ))}
    </div>
  );
};

export default ExpenseList;
