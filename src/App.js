import React from "react";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";
import CalculatorReview from "./components/CalculatorReview";


const style = {
  bg: `min-h-screen h-full w-screen p-10 flex justify-center`,
  head: `text-3xl font-bold text-left text-gray-800 pb-3`,
  subtitle: `text-xl font-bold text-left border-b-2 border-b-slate-200 mb-4 pb-2`,
  top: `grid grid-cols-1 xl:grid-cols-3 gap-4`,
  grid_top: `col-span-1 bg-[#00474b] py-5 rounded-md shadow-lg h-20`,
  bottom: `grid grid-cols-1 lg:grid-cols-3 pt-10 gap-4`,
  grid_bottom1: `px-5 col-span-1 bg-white py-5 rounded-md shadow-lg h-60`,
  grid_bottom2: `px-5 col-span-1 lg:col-span-2 bg-white py-5 rounded-md shadow-lg h-full min-h-60`,
};

const App = () => {
  return (
    <AppProvider>
      <div className={style.bg}>
        <div className="container">
          <h1 className={style.head}>Budget Planner</h1>
          <div className={style.top}>
            <div className={style.grid_top}>
              <Budget />
            </div>
            <div className={style.grid_top}>
              <Remaining />
            </div>
            <div className={style.grid_top}>
              <ExpenseTotal />
            </div>
          </div>
          <div className={style.bottom}>
            <div className={style.grid_bottom1}>
              <h3 className={style.subtitle}>Add Expense</h3>
              <AddExpenseForm />

            </div>
            <div className={style.grid_bottom2}>
              <h3 className={style.subtitle}>Expenses</h3>
                <ExpenseList />

            </div>
          </div>
          <div>
           
          </div>
        </div>
        <CalculatorReview/>
      </div>

    </AppProvider>
  );
};
export default App;
