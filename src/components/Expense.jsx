import React from "react";
import { formatDate } from "../helpers";

const Expense = ({ expense }) => {
  const { expenseName, expenseAmount, expenseCategory, id, date } = expense;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
          <p className="categoria">{expenseCategory}</p>
          <p className="nombre-gasto">{expenseName}</p>
          <p className="fecha-gasto">
            Added on: {""}
            <span>{formatDate(date)}</span>
          </p>
        </div>
      </div>
      <p className="cantidad-gasto">${expenseAmount}</p>
    </div>
  );
};

export default Expense;
