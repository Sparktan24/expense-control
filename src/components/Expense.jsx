import React from "react";
import { formatDate } from "../helpers";

import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";

const iconDictionary = {
  savings: IconoAhorro,
  food: IconoComida,
  house: IconoCasa,
  misc: IconoGastos,
  fun: IconoOcio,
  health: IconoSalud,
  suscriptions: IconoSuscripciones,
};

const Expense = ({ expense }) => {
  const { expenseName, expenseAmount, expenseCategory, id, date } = expense;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <img src={iconDictionary[expenseCategory]} alt="Expense icon" />
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
