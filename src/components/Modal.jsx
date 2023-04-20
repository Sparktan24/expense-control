import { useState, useEffect } from "react";
import Message from "./Message";
import CloseBtn from "../img/cerrar.svg";

const Modal = ({
  setModal,
  animateModal,
  setAnimateModal,
  saveExpense,
  editExpense,
}) => {
  const [message, setMessage] = useState("");
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setExpenseName(editExpense.expenseName);
      setExpenseAmount(editExpense.expenseAmount);
      setExpenseCategory(editExpense.expenseCategory);
      setId(editExpense.id);
      setDate(editExpense.date);
    }
  }, []);

  const hideModal = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /* [expenseName, expenseAmount, expenseCategory].includes("")
      ? setMessage("All fields are required")
      : console.log("validation passed"); */

    if ([expenseName, expenseAmount, expenseCategory].includes("")) {
      setMessage("All fields are required");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }

    saveExpense({ expenseName, expenseAmount, expenseCategory, id, date });
    hideModal();
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseBtn} alt="Close modal button" onClick={hideModal} />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`formulario ${animateModal ? "animar" : "cerrar"}`}
      >
        <legend>
          {editExpense.expenseName ? "Edit Expense" : "New Expense"}
        </legend>
        {message && <Message type="error">{message}</Message>}

        <div className="campo">
          <label htmlFor="name">Expense Name</label>
          <input
            id="name"
            type="text"
            placeholder="Add the name of the expense"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            placeholder="Add the expense amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={expenseCategory}
            onChange={(e) => setExpenseCategory(e.target.value)}
          >
            <option value="">--Select--</option>
            <option value="savings">Savings</option>
            <option value="food">Food</option>
            <option value="house">House</option>
            <option value="misc">Misc</option>
            <option value="fun">Fun</option>
            <option value="health">Health</option>
            <option value="suscriptions">Suscriptions</option>
          </select>
        </div>
        <input
          type="submit"
          value={editExpense.expenseName ? "Save Changes" : "Add Expense"}
        />
      </form>
    </div>
  );
};

export default Modal;
