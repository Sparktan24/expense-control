import { useState, useEffect } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ExpenseList from "./components/ExpenseList";
import { generateId } from "./helpers";
import IconNewExpense from "./img/nuevo-gasto.svg";

function App() {
  const [expenses, setExpenses] = useState([]);

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [editExpense, setEditExpense] = useState({});

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimateModal(true);
      }, 500);
    }
  }, [editExpense]);

  const handleNewExpense = () => {
    setModal(true);
    setEditExpense({});

    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };

  const saveExpense = (expense) => {
    console.log(expense);
    if (expense.id) {
      const updatedExpenses = expenses.map((expenseState) =>
        expenseState.id === expense.id ? expense : expenseState
      );
      setExpenses(updatedExpenses);
    } else {
      expense.id = generateId();
      expense.date = Date.now();
      setExpenses([...expenses, expense]);
    }
  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <main>
            <ExpenseList expenses={expenses} setEditExpense={setEditExpense} />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconNewExpense}
              alt="Icon new expense"
              onClick={handleNewExpense}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveExpense={saveExpense}
          editExpense={editExpense}
        />
      )}
    </div>
  );
}

export default App;
