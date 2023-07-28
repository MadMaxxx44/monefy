import { useState } from "react";

const AddSub = () => {
  const [incomeForm, setIncomeForm] = useState(false);
  return (
    <>
      <div className="flex w-52 justify-between">
        <div className="flex justify-center rounded-full outline outline-3 outline-red-400 border-gray-400 pb-2 h-14 w-14 hover:bg-gray-100 hover:cursor-pointer hover:border-1 hover:border-solid">
          <button className="text-red-400 font-black text-4xl">-</button>
        </div>
        <div
          onClick={() => setIncomeForm(true)}
          className="flex justify-center rounded-full outline outline-3 outline-green-500 border-gray-400 pb-0.5 h-14 w-14 hover:bg-gray-100 hover:cursor-pointer hover:border-1 hover:border-solid"
        >
          <button className="text-green-500 font-black text-4xl transition-colors duration-1000">
            +
          </button>
        </div>
      </div>

      <div
        className={
          incomeForm
            ? "absolute top-0 transition-all ease-in-out duration-500 flex flex-col w-full h-full items-center bg-slate-50"
            : "absolute top-0 opacity-0 pointer-events-none"
        }
      >
        <div className="flex w-full p-1.5 text-xl justify-center bg-green-500">
          <button
            onClick={() => setIncomeForm(false)}
            className="absolute top-[-1px] left-0 p-2"
          >
            Cancel
          </button>
          <h1>New Income</h1>
        </div>
        <div className="flex flex-col justify-start gap-5 h-20 mt-5">
          <div className="flex">
            <div className="bg-green-500 w-8 h-8 pt-[9px] pl-0.5 text-xs">
              UAH
            </div>
            <input
              className="relative bg-green-500 h-8 outline-none text-gray-100"
              type="number"
            />
          </div>
          <button className="hover:bg-green-500 text-l font-light px-4 py-2 border-1 border-solid border-green-500 uppercase">
            Choose Category
          </button>
        </div>
      </div>
    </>
  );
};

export default AddSub;
