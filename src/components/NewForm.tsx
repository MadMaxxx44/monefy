import hygiene from "../images/hygiene.png";
import food from "../images/food.png";
import home from "../images/home.png";
import health from "../images/health.png";
import cafe from "../images/cafe.png";
import car from "../images/car.png";
import clothes from "../images/clothes.png";
import pets from "../images/pets.png";
import entertainment from "../images/entertainment.png";
import gifts from "../images/gifts.png";
import connection from "../images/connection.png";
import sport from "../images/sport.png";
import bills from "../images/bills.png";
import taxi from "../images/taxi.png";
import transport from "../images/transport.png";
import deposits from "../images/deposits.png";
import salary from "../images/salary.png";
import { useMonefy } from "../context/MonefyContext";

const NewIncome = () => {
  const {
    red,
    green,
    setRed,
    setGreen,
    form,
    closeForm,
    input,
    setInput,
    isLocked,
    locked,
    unlocked,
    expenseForm,
    closeExpenseForm,
    dataArr,
    setDataArr,
    historyArr,
    setHistoryArr,
    depositsStr,
    salaryStr,
    hygieneStr,
    foodStr,
    homeStr,
    healthStr,
    cafeStr,
    carStr,
    clothesStr,
    petsStr,
    entertainmentStr,
    giftsStr,
    connectionStr,
    sportStr,
    billsStr,
    taxiStr,
    transportStr,
  } = useMonefy();

  const setArrData = (index: number, value: number) => {
    const newData = [...dataArr];
    newData[index] += value;
    setDataArr(newData);
  };

  const setHistory = (name: string, amount: number) => {
    const newArr = [...historyArr];
    newArr.push({ id: crypto.randomUUID(), name, amount });
    setHistoryArr(newArr);
    console.log(newArr);
  };

  return (
    <div
      className={
        form
          ? "absolute top-0 transition-all ease-in-out duration-700 flex flex-col w-full h-full items-center bg-slate-50"
          : "absolute top-0 opacity-0 pointer-events-none"
      }
    >
      <div className="flex w-full p-1.5 text-xl justify-center bg-green-500">
        <button
          onClick={() => {
            closeForm();
            closeExpenseForm();
            locked();
            setInput("0");
          }}
          className="absolute top-[-1px] left-0 p-2"
        >
          Cancel
        </button>
        <h1>{expenseForm ? "New Expense" : "New Income"}</h1>
      </div>
      <div className="flex flex-col justify-start gap-5 h-20 mt-5">
        <div className="flex">
          <div className="bg-green-500 w-8 h-8 pt-[9px] pl-0.5 text-xs">
            UAH
          </div>
          <input
            className={"relative bg-green-500 h-8 outline-none text-gray-100"}
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            input > "0" ? unlocked() : locked();
          }}
          className={
            isLocked
              ? "hover:bg-green-500 text-l transition-all ease-in-out duration-700 font-light px-4 py-2 border-1 border-solid border-green-500 uppercase"
              : "opacity-0 pointer-events-none"
          }
        >
          Choose Category
        </button>
        <div
          className={
            isLocked || expenseForm
              ? "opacity-0 pointer-events-none"
              : "flex w-full h-full gap-2 transition-all ease-in-out duration-700"
          }
        >
          <div
            onClick={() => {
              input > "0"
                ? (closeForm(),
                  locked(),
                  setInput("0"),
                  setGreen(green + Number(input)),
                  setHistory(depositsStr, Number(input)))
                : (locked(), setInput("0"));
            }}
            className="flex flex-col w-16 text-sm hover:bg-green-500 hover:cursor-pointer p-2 items-center"
          >
            <img className="h-8 w-8" src={deposits} alt="deposits" />
            {depositsStr}
          </div>
          <div
            onClick={() => {
              input > "0"
                ? (closeForm(),
                  locked(),
                  setInput("0"),
                  setGreen(green + Number(input)),
                  setHistory(salaryStr, Number(input)))
                : (locked(), setInput("0"));
            }}
            className="flex flex-col w-16 text-sm hover:bg-green-500 hover:cursor-pointer p-2 items-center"
          >
            <img className="h-8 w-8" src={salary} alt="deposit" />
            {salaryStr}
          </div>
        </div>
        <div
          className={`absolute top-[145px] left-1 transition-all ease-in-out duration-700 items-center ${
            isLocked ? "opacity-0 pointer-events-none" : "flex w-full h-full"
          }
          ${
            expenseForm
              ? "flex flex-col w-full h-full gap-2"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex gap-3">
            <div
              onClick={() => {
                input > "0"
                  ? (closeForm(),
                    locked(),
                    setInput("0"),
                    closeExpenseForm(),
                    setRed(red + Number(input)),
                    setArrData(0, Number(input)),
                    setHistory(hygieneStr, Number(input)))
                  : (locked(), setInput("0"));
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img className="h-8 w-8" src={hygiene} alt="hygiene" />
              {hygieneStr}
            </div>
            <div
              onClick={() => {
                input > "0"
                  ? (closeForm(),
                    locked(),
                    setInput("0"),
                    closeExpenseForm(),
                    setRed(red + Number(input)),
                    setArrData(1, Number(input)),
                    setHistory(foodStr, Number(input)))
                  : (locked(), setInput("0"));
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img className="h-8 w-8" src={food} alt="food" />
              {foodStr}
            </div>
            <div
              onClick={() => {
                input > "0"
                  ? (closeForm(),
                    locked(),
                    setInput("0"),
                    closeExpenseForm(),
                    setRed(red + Number(input)),
                    setArrData(2, Number(input)),
                    setHistory(homeStr, Number(input)))
                  : (locked(), setInput("0"));
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img className="h-8 w-8" src={home} alt="home" />
              {homeStr}
            </div>
          </div>
          <div className="flex gap-3">
            <div
              onClick={() => {
                input > "0"
                  ? (closeForm(),
                    locked(),
                    setInput("0"),
                    closeExpenseForm(),
                    setRed(red + Number(input)),
                    setArrData(3, Number(input)),
                    setHistory(healthStr, Number(input)))
                  : (locked(), setInput("0"));
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img className="h-8 w-8" src={health} alt="health" />
              {healthStr}
            </div>
            <div
              onClick={() => {
                input > "0"
                  ? (closeForm(),
                    locked(),
                    setInput("0"),
                    closeExpenseForm(),
                    setRed(red + Number(input)),
                    setArrData(4, Number(input)),
                    setHistory(cafeStr, Number(input)))
                  : (locked(), setInput("0"));
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img className="h-8 w-8" src={cafe} alt="cafe" />
              {cafeStr}
            </div>
            <div
              onClick={() => {
                input > "0"
                  ? (closeForm(),
                    locked(),
                    setInput("0"),
                    closeExpenseForm(),
                    setRed(red + Number(input)),
                    setArrData(5, Number(input)),
                    setHistory(carStr, Number(input)))
                  : (locked(), setInput("0"));
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img className="h-8 w-8" src={car} alt="car" />
              {carStr}
            </div>
          </div>
          <div className="flex gap-3">
            <div
              onClick={() => {
                input > "0"
                  ? (closeForm(),
                    locked(),
                    setInput("0"),
                    closeExpenseForm(),
                    setRed(red + Number(input)),
                    setArrData(6, Number(input)),
                    setHistory(clothesStr, Number(input)))
                  : (locked(), setInput("0"));
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img className="h-8 w-8" src={clothes} alt="clothes" />
              {clothesStr}
            </div>
            <div
              onClick={() => {
                input > "0"
                  ? (closeForm(),
                    locked(),
                    setInput("0"),
                    closeExpenseForm(),
                    setRed(red + Number(input)),
                    setArrData(7, Number(input)),
                    setHistory(petsStr, Number(input)))
                  : (locked(), setInput("0"));
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img className="h-8 w-8" src={pets} alt="pets" />
              {petsStr}
            </div>
            <div
              onClick={() => {
                input > "0"
                  ? (closeForm(),
                    locked(),
                    setInput("0"),
                    closeExpenseForm(),
                    setRed(red + Number(input)),
                    setArrData(8, Number(input)),
                    setHistory(giftsStr, Number(input)))
                  : (locked(), setInput("0"));
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img className="h-8 w-8" src={gifts} alt="gifts" />
              {giftsStr}
            </div>
          </div>
          <div className="flex gap-3">
            <div
              onClick={() => {
                input > "0"
                  ? (closeForm(),
                    locked(),
                    setInput("0"),
                    closeExpenseForm(),
                    setRed(red + Number(input)),
                    setArrData(9, Number(input)),
                    setHistory(entertainmentStr, Number(input)))
                  : (locked(), setInput("0"));
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img
                className="h-8 w-8"
                src={entertainment}
                alt="entertainment"
              />
              {entertainmentStr}
            </div>
            <div
              onClick={() => {
                input > "0"
                  ? (closeForm(),
                    locked(),
                    setInput("0"),
                    closeExpenseForm(),
                    setRed(red + Number(input)),
                    setArrData(10, Number(input)),
                    setHistory(connectionStr, Number(input)))
                  : (locked(), setInput("0"));
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img className="h-8 w-8" src={connection} alt="connection" />
              {connectionStr}
            </div>
            <div
              onClick={() => {
                input > "0"
                  ? (closeForm(),
                    locked(),
                    setInput("0"),
                    closeExpenseForm(),
                    setRed(red + Number(input)),
                    setArrData(11, Number(input)),
                    setHistory(sportStr, Number(input)))
                  : (locked(), setInput("0"));
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img className="h-8 w-8" src={sport} alt="sport" />
              {sportStr}
            </div>
          </div>
          <div className="flex gap-3">
            <div
              onClick={() => {
                input > "0"
                  ? (closeForm(),
                    locked(),
                    setInput("0"),
                    closeExpenseForm(),
                    setRed(red + Number(input)),
                    setArrData(12, Number(input)),
                    setHistory(billsStr, Number(input)))
                  : (locked(), setInput("0"));
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img className="h-8 w-8" src={bills} alt="bills" />
              {billsStr}
            </div>
            <div
              onClick={() => {
                input > "0"
                  ? (closeForm(),
                    locked(),
                    setInput("0"),
                    closeExpenseForm(),
                    setRed(red + Number(input)),
                    setArrData(13, Number(input)),
                    setHistory(taxiStr, Number(input)))
                  : (locked(), setInput("0"));
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img className="h-8 w-8" src={taxi} alt="taxi" />
              {taxiStr}
            </div>
            <div
              onClick={() => {
                input > "0"
                  ? (closeForm(),
                    locked(),
                    setInput("0"),
                    closeExpenseForm(),
                    setRed(red + Number(input)),
                    setArrData(14, Number(input)),
                    setHistory(transportStr, Number(input)))
                  : (locked(), setInput("0"));
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer px-2 items-center"
            >
              <img
                className="w-20 h-[40px] object-contain"
                src={transport}
                alt="transport"
              />
              {transportStr}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewIncome;
