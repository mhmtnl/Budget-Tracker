import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="text-lg align-items-center grid grid-cols-2 gap-2">
        <div className="col-span-1">
          <input
            required="required"
            type="text"
            className="bg-slate-200 text-start p-4 rounded-md border border-slate-800 w-full"
            id="name"
            value={name}
            placeholder="Activity"
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className="col-span-1">
          <input
            required="required"
            type="number"
            className="bg-slate-200 text-end p-4 rounded-md border border-slate-800 w-full"
            id="cost"
            value={cost}
            placeholder="Cost"
            onChange={(event) => setCost(event.target.value)}
          ></input>
        </div>
        <div className="col-span-1 col-start-2">
          <button
            type="submit"
            className="transition ease-in-out w-full shadow-md hover:font-bold hover:bg-[#00474b] h-full p-4 text-2xl text-white rounded-md bg-[#25bda9]"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
