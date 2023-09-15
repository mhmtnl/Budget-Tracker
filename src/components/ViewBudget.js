import React from "react";

const ViewBudget = (props) => {
  return (
    <>
      <div className="grid grid-cols-2 justify-between items-center">
        <div className="col-span-1 ps-5 flex">
          <p className="text-2xl text-left text-white">Budget:</p>
          <button
            type="button"
            className="bg-[#25bda9] hover:bg-[#c5e4e7] text-[#00474b] font-bold px-4 rounded-md ml-5"
            onClick={props.handleEditClick}
          >
            Edit
          </button>
        </div>
        <div className="col-span-1 text-right pe-5 md:pe-10">
          <h1 id="tipAmount" className="text-4xl text-[#25bda9]">
            ${props.budget}
          </h1>
        </div>
      </div>
    </>
  );
};

export default ViewBudget;
