import React, { useState } from "react";
import { FaCalculator } from "react-icons/fa";
/* eslint no-eval:  */

const CalculatorReview = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  
  
 function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  const visible = isOpen ? 'visible' : 'hidden';
  const ops = ["/", "*", "+", "-", "."];
  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          className=" bg-[#00474b] text-white col-span-1 rounded-lg shadow-md"
          onClick={() => updateCalc(i.toString())}
          key={i}
        >
          {i}
        </button>
      );
    }
    return digits;
  };

  const calculate = () => {
    if(!calc) {
        return 
    }
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    setCalc("");
  };

  return (
    <div className="text-xl w-full h-auto bottom-0 left-0 flex fixed justify-center">
     <div className= {`${visible} absolute bottom-40 rounded-3xl h-68 w-72 bg-[#25bda9] flex items-center justify-center shadow-white shadow-2xl p-5 hover:scale-110 ease-out duration-300`}>
        <div className="rounded-lg w-60 h-auto p-2">
        <div  className="bg-slate-200 rounded text-right">
        <div className="mx-5">
            {result ? <span>({result})</span> : ""}&nbsp;
            {calc || "0"}
          </div>
        </div>
          
          <div className="grid grid-cols-6 gap-1 my-2">
            <button
              className="bg-[#00474b] text-white col-span-1 rounded-s-lg shadow-md"
              onClick={() => updateCalc("/")}
            >
              /
            </button>
            <button
              className="bg-[#00474b] text-white col-span-1 shadow-md"
              onClick={() => updateCalc("*")}
            >
              *
            </button>
            <button
              className="bg-[#00474b] text-white col-span-1 shadow-md"
              onClick={() => updateCalc("+")}
            >
              +
            </button>
            <button
              className="bg-[#00474b] text-white col-span-1 shadow-md"
              onClick={() => updateCalc("-")}
            >
              -
            </button>
            <button
              className="bg-[#00474b] text-white col-span-2 rounded-e-lg shadow-md"
              onClick={deleteLast}
            >
              DEL
            </button>
          </div>
          <div className="grid grid-cols-3  gap-1">
            {createDigits()}
            <button
              className=" bg-[#00474b] text-white col-span-1 rounded-lg shadow-md"
              onClick={() => updateCalc("0")}
            >
              0
            </button>
            <button
              className=" bg-[#00474b] text-white col-span-1 rounded-lg shadow-md"
              onClick={() => updateCalc(".")}
            >
              .
            </button>
            <button
              className=" bg-[#00474b] text-white col-span-1 rounded-lg shadow-md"
              onClick={calculate}
            >
              =
            </button>
          </div>
        </div>
      </div>


      <div onClick={toggle} className="cursor-pointer absolute bottom-10 ease-out duration-300 shadow-2xl shadow-white rounded-full flex justify-center items-center h-20 w-20 bg-white hover:scale-125 ">
        <FaCalculator
          size="2.5rem"
          className=" text-[#25bda9]"
        ></FaCalculator>
      </div>
    </div>
  );
};

export default CalculatorReview;