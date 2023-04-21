import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const BudgetControl = ({
  expenses,
  setExpenses,
  budget,
  setBudget,
  setIsValidBudget,
}) => {
  const [porcent, setPorcent] = useState(0);
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalSpent = expenses.reduce(
      (total, expense) => total + expense.expenseAmount,
      0
    );
    //const totalAvailable = budget - totalSpent;
    setSpent(totalSpent);
    setAvailable(budget - spent);

    //  CALCULATE SPENT PORCENT
    const newPorcent = (((budget - available) / budget) * 100).toFixed(2);
    setTimeout(() => {
      setPorcent(newPorcent);
    }, 1000);
  }, [expenses, available, spent]);

  const formatAmount = (amount) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const handleResetApp = () => {
    const result = confirm("Do you want to reset the app?");
    if (result) {
      setExpenses([]);
      setBudget(0);
      setIsValidBudget(false);
    }
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: porcent > 100 ? "#DC2626" : "#3B82F6",
            trailColor: "#F5F5F5",
            textColor: porcent > 100 ? "#DC2626" : "#3B82F6",
          })}
          value={porcent}
          text={`${porcent}% Spent`}
        />
      </div>

      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Reset App
        </button>
        <p>
          <span>Budget: </span> {formatAmount(budget)}
        </p>

        <p className={`${available < 0 ? "negativo" : ""}`}>
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
