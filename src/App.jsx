import { useState, useEffect } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ExpenseList from "./components/ExpenseList";
import { generateId } from "./helpers";
import IconNewExpense from "./img/nuevo-gasto.svg";

function App() {
  const [expenses, setExpenses] = useState([]);

  const [budget, setBudget] = useState(
    Number(localStorage.getItem("budget")) ?? 0
  );
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [editExpense, setEditExpense] = useState({});

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimateModal(true);
      }, 300);
    }
  }, [editExpense]);

  useEffect(() => {
    localStorage.setItem("budget", budget ?? 0);
  }, [budget]);

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem("budget")) ?? 0;
    budgetLS > 0 && setIsValidBudget(true);
  }, []);

  const handleNewExpense = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 300);
  };

  const saveExpense = (expense) => {
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

  const deleteExpense = (id) => {
    //console.log(`Deleting the expense with the id: ${id}`);
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
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
            <ExpenseList
              expenses={expenses}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
            />
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
          setEditExpense={setEditExpense}
        />
      )}
    </div>
  );
}

export default App;
