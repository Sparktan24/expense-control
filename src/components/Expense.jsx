import React from "react";

const Expense = ({ expense }) => {
  const { expenseName, expenseAmount, expenseCategory, id } = expense;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
          <p className="categoria">{expenseCategory}</p>
          <p className="nombre-gasto">{expenseName}</p>
        </div>
      </div>
    </div>
  );
};

export default Expense;
