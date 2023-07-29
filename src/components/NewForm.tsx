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

type NewFormProps = {
  incomeForm: boolean;
  incomeInput: string;
  isLocked: boolean;
  setIncomeForm: (arg0: boolean) => void;
  setIncomeInput: (arg0: string) => void;
  setIsLocked: (arg0: boolean) => void;
  expenseForm: boolean;
  setExpenseForm: (arg0: boolean) => void;
};

const NewIncome = ({
  incomeForm,
  incomeInput,
  isLocked,
  setIncomeForm,
  setIncomeInput,
  setIsLocked,
  expenseForm,
  setExpenseForm,
}: NewFormProps) => {
  return (
    <div
      className={
        incomeForm
          ? "absolute top-0 transition-all ease-in-out duration-500 flex flex-col w-full h-full items-center bg-slate-50"
          : "absolute top-0 opacity-0 pointer-events-none"
      }
    >
      <div className="flex w-full p-1.5 text-xl justify-center bg-green-500">
        <button
          onClick={() => {
            setIncomeForm(false);
            setExpenseForm(false);
            setIsLocked(true);
            setIncomeInput("0");
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
            value={incomeInput}
            onChange={(e) => setIncomeInput(e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            incomeInput > "0" ? setIsLocked(false) : setIsLocked(true);
          }}
          className={
            isLocked
              ? "hover:bg-green-500 text-l font-light px-4 py-2 border-1 border-solid border-green-500 uppercase"
              : "opacity-0 pointer-events-none"
          }
        >
          Choose Category
        </button>
        <div
          className={
            isLocked || expenseForm
              ? "opacity-0 pointer-events-none"
              : "duration-500 flex w-full h-full"
          }
        >
          <div
            onClick={() => {
              setIncomeForm(false);
              setIsLocked(true);
              setIncomeInput("0");
            }}
            className="flex flex-col w-16 text-sm hover:bg-green-500 hover:cursor-pointer p-2 items-center"
          >
            <img className="h-8 w-8" src={deposits} alt="deposits" />
            Deposits
          </div>
          <div
            onClick={() => {
              setIncomeForm(false);
              setIsLocked(true);
              setIncomeInput("0");
            }}
            className="flex flex-col w-16 text-sm hover:bg-green-500 hover:cursor-pointer p-2 items-center"
          >
            <img className="h-8 w-8" src={salary} alt="deposit" />
            Salary
          </div>
        </div>
        <div
          className={`absolute top-[145px] left-1 transition-all ease-in-out duration-1000 items-center ${
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
                setIncomeForm(false);
                setIsLocked(true);
                setIncomeInput("0");
                setExpenseForm(false);
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img className="h-8 w-8" src={hygiene} alt="hygiene" />
              Hygiene
            </div>
            <div
              onClick={() => {
                setIncomeForm(false);
                setIsLocked(true);
                setIncomeInput("0");
                setExpenseForm(false);
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img className="h-8 w-8" src={food} alt="food" />
              Food
            </div>
            <div
              onClick={() => {
                setIncomeForm(false);
                setIsLocked(true);
                setIncomeInput("0");
                setExpenseForm(false);
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img className="h-8 w-8" src={home} alt="home" />
              Home
            </div>
          </div>
          <div className="flex gap-3">
            <div
              onClick={() => {
                setIncomeForm(false);
                setIsLocked(true);
                setIncomeInput("0");
                setExpenseForm(false);
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img className="h-8 w-8" src={health} alt="health" />
              Health
            </div>
            <div
              onClick={() => {
                setIncomeForm(false);
                setIsLocked(true);
                setIncomeInput("0");
                setExpenseForm(false);
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img className="h-8 w-8" src={cafe} alt="cafe" />
              Cafe
            </div>
            <div
              onClick={() => {
                setIncomeForm(false);
                setIsLocked(true);
                setIncomeInput("0");
                setExpenseForm(false);
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img className="h-8 w-8" src={car} alt="car" />
              Car
            </div>
          </div>
          <div className="flex gap-3">
            <div
              onClick={() => {
                setIncomeForm(false);
                setIsLocked(true);
                setIncomeInput("0");
                setExpenseForm(false);
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img className="h-8 w-8" src={clothes} alt="clothes" />
              Clothes
            </div>
            <div
              onClick={() => {
                setIncomeForm(false);
                setIsLocked(true);
                setIncomeInput("0");
                setExpenseForm(false);
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img className="h-8 w-8" src={pets} alt="pets" />
              Pets
            </div>
            <div
              onClick={() => {
                setIncomeForm(false);
                setIsLocked(true);
                setIncomeInput("0");
                setExpenseForm(false);
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img className="h-8 w-8" src={gifts} alt="gifts" />
              Gifts
            </div>
          </div>
          <div className="flex gap-3">
            <div
              onClick={() => {
                setIncomeForm(false);
                setIsLocked(true);
                setIncomeInput("0");
                setExpenseForm(false);
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img
                className="h-8 w-8"
                src={entertainment}
                alt="entertainment"
              />
              Entertainment
            </div>
            <div
              onClick={() => {
                setIncomeForm(false);
                setIsLocked(true);
                setIncomeInput("0");
                setExpenseForm(false);
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img className="h-8 w-8" src={connection} alt="connection" />
              Connection
            </div>
            <div
              onClick={() => {
                setIncomeForm(false);
                setIsLocked(true);
                setIncomeInput("0");
                setExpenseForm(false);
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img className="h-8 w-8" src={sport} alt="sport" />
              Sport
            </div>
          </div>
          <div className="flex gap-3">
            <div
              onClick={() => {
                setIncomeForm(false);
                setIsLocked(true);
                setIncomeInput("0");
                setExpenseForm(false);
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img className="h-8 w-8" src={bills} alt="bills" />
              Bills
            </div>
            <div
              onClick={() => {
                setIncomeForm(false);
                setIsLocked(true);
                setIncomeInput("0");
                setExpenseForm(false);
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer p-2 items-center"
            >
              <img className="h-8 w-8" src={taxi} alt="taxi" />
              Taxi
            </div>
            <div
              onClick={() => {
                setIncomeForm(false);
                setIsLocked(true);
                setIncomeInput("0");
                setExpenseForm(false);
              }}
              className="flex flex-col w-20 h-16 text-xs hover:bg-green-500 hover:cursor-pointer px-2 items-center"
            >
              <img
                className="w-20 h-[40px] object-contain"
                src={transport}
                alt="transport"
              />
              Transport
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewIncome;
