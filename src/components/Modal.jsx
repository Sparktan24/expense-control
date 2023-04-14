import { useState } from "react";
import CloseBtn from "../img/cerrar.svg";

const Modal = ({ setModal, animateModal, setAnimateModal }) => {
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");

  const hideModal = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseBtn} alt="Close modal button" onClick={hideModal} />
      </div>

      <form className={`formulario ${animateModal ? "animar" : "cerrar"}`}>
        <legend>New Expense</legend>

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
        <input type="submit" value="Add expense" />
      </form>
    </div>
  );
};

export default Modal;
