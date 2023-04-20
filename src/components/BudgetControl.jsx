import { useState, useEffect } from "react";

const BudgetControl = ({ expenses, budget }) => {
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalSpent = expenses.reduce(
      (total, expense) => total + expense.expenseAmount,
      0
    );

    setSpent(totalSpent);
    setAvailable(budget - spent);
  }, [expenses, available, spent]);

  const formatAmount = (amount) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Graphic Here</p>
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Budget: </span> {formatAmount(budget)}
        </p>

        <p>
          <span>Available: </span> {formatAmount(available)}
        </p>

        <p>
          <span>Spent: </span> {formatAmount(spent)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
