import React, { useState } from "react";

const EditBudget = (props) => {
  const [value, setValue] = useState(props.budget);
  return (
    <div className="grid grid-cols-2 justify-between items-center">
      <div className="col-span-1 ps-5 flex ">
        <p className="text-2xl text-left text-white">Budget:</p>
        <button
          type="button"
          className="bg-[#25bda9] hover:bg-[#c5e4e7] text-[#00474b] font-bold py-1 px-4 rounded-md ml-5"
          onClick={() => props.handleSaveClick(value)}
        >
          Save
        </button>
      </div>
      <div className="col-span-1 text-right pe-5 md:pe-10 justify-end flex">
        <h1 id="tipAmount" className="text-4xl text-[#25bda9]">
          $
        </h1>
        <input
          required="required"
          type="number"
          className="bg-[#00474b] text-end text-4xl h-10 ml-2 text-[#25bda9] border border-[#25bda9] p-2 rounded-md w-[8rem] "
          id="budget"
          value={value}
          placeholder="What a budget yhou have"
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
    </div>
  );
};

export default EditBudget;
