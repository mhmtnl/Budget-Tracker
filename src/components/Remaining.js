import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const alertType =
    totalExpenses > budget
      ? "font-bold text-red-500 text-5xl"
      : "text-[#25bda9]";
  return (
    <div className="grid grid-cols-2 justify-between items-center">
      <div className="col-span-1 ps-5 flex">
        <p className="text-2xl text-left text-white">Remaining:</p>
      </div>
      <div className="col-span-1 text-right pe-5 md:pe-10">
        <h1 id="remainingBudget" className={`text-4xl  ${alertType}`}>
          ${budget - totalExpenses}
        </h1>
      </div>
    </div>
  );
};

export default Remaining;
