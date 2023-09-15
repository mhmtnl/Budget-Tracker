import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    <div className="grid grid-cols-2 justify-between items-center">
      <div className="col-span-1 ps-5 flex">
        <p className="text-2xl text-left text-white">Spent:</p>
      </div>
      <div className="col-span-1 text-right pe-5 md:pe-10">
        <h1 id="spentTotal" className="text-4xl text-[#25bda9]">
          ${totalExpenses}
        </h1>
      </div>
    </div>
  );
};

export default ExpenseTotal;
