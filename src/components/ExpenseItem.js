import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);
  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };
  return (
    <li className="w-full flex justify-between bg-slate-200 my-2 p-4 rounded-md align-items-center text-lg">
      {props.name}
      <div className="flex justify-end">
        <span className="badge rounded-pill text-bg-primary pr-2 me-2">
          ${props.cost}
        </span>
        <TiDelete
          size="1.5em"
          onClick={handleDeleteExpense}
          className="cursor-pointer hover:scale-125"
        ></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;
