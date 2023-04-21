import { useState, useEffect } from "react";

const Filters = ({ filter, setFilter }) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label>Filter Expenses</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">--All categories--</option>
            <option value="savings">Savings</option>
            <option value="food">Food</option>
            <option value="house">House</option>
            <option value="misc">Misc</option>
            <option value="fun">Fun</option>
            <option value="health">Health</option>
            <option value="suscriptions">Suscriptions</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filters;
