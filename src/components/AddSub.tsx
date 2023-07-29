import { useState } from "react";
import NewForm from "./NewForm.tsx";

// type AddSubProps = {
//   green: number;
//   red: number;
// };

const AddSub = () => {
  const [incomeForm, setIncomeForm] = useState(false);
  const [incomeInput, setIncomeInput] = useState("0");
  const [isLocked, setIsLocked] = useState(true);

  const [expenseForm, setExpenseForm] = useState(false);

  // const handleIncome = () = {
  //   return green + Number(input);
  // }

  return (
    <>
      <div className="flex w-52 justify-between">
        <div
          onClick={() => {
            setIncomeForm(true);
            setExpenseForm(true);
          }}
          className="flex justify-center rounded-full outline outline-3 outline-red-400 border-gray-400 pb-2 h-14 w-14 hover:bg-gray-100 hover:cursor-pointer hover:border-1 hover:border-solid"
        >
          <button className="text-red-400 font-black text-4xl">-</button>
        </div>
        <div
          onClick={() => setIncomeForm(true)}
          className="flex justify-center rounded-full outline outline-3 outline-green-500 border-gray-400 pb-0.5 h-14 w-14 hover:bg-gray-100 hover:cursor-pointer hover:border-1 hover:border-solid"
        >
          <button className="text-green-500 font-black text-4xl">+</button>
        </div>
      </div>

      <NewForm
        incomeForm={incomeForm}
        incomeInput={incomeInput}
        isLocked={isLocked}
        setIncomeForm={setIncomeForm}
        setIncomeInput={setIncomeInput}
        setIsLocked={setIsLocked}
        expenseForm={expenseForm}
        setExpenseForm={setExpenseForm}
      />
    </>
  );
};

export default AddSub;
