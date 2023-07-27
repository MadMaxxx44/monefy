import { useState } from "react";
import categoriesImg from "./images/categories.png";
import close from "./images/close.png";
import hygiene from "./images/hygiene.png";
import food from "./images/food.png";
import home from "./images/home.png";
import health from "./images/health.png";
import cafe from "./images/cafe.png";
import car from "./images/car.png";
import clothes from "./images/clothes.png";
import pets from "./images/pets.png";
import entertainment from "./images/entertainment.png";
import gifts from "./images/gifts.png";
import connection from "./images/connection.png";
import sport from "./images/sport.png";
import bills from "./images/bills.png";
import taxi from "./images/taxi.png";
import transport from "./images/transport.png";
import deposits from "./images/deposits.png";
import salary from "./images/salary.png";
import Header from "./components/Header";
import Circle from "./components/Circle";
import Balance from "./components/Balance";
import AddSub from "./components/AddSub";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [categories, setCategories] = useState(false);

  const green: number = 10003;
  const red: number = 10002;
  const balance: number = green - red;
  const balanceBg: string = green > red ? "bg-green-500" : "bg-red-400";
  const balanceBgDefault: string = balance == 0 ? "bg-gray-200" : balanceBg;

  return (
    <>
      <div className="flex h-screen w-screen justify-center items-center">
        <section className="flex-col h-3/5 w-3/5 relative border-2 border-solid">
          <Header setSidebar={setSidebar} />
          <div className="flex flex-col w-full h-full justify-center items-center">
            <Circle green={green} red={red} />
            <Balance balance={balance} balanceBgDefault={balanceBgDefault} />
            <AddSub />
          </div>
          <div
            className={
              sidebar
                ? "sidebar z-20 scrollbar-hide absolute top-0 bottom-0 right-0 lg:right-0 w-[300px] overflow-y-auto bg-gray-50"
                : "visibility: hidden"
            }
          >
            <img
              onClick={() => {
                setSidebar(false);
                setCategories(false);
              }}
              className="absolute left-0 h-10 w-10 p-2 hover:cursor-pointer hover:bg-green-300 hover:border-x-2 hover:border-b-2 hover:border-solid"
              src={close}
              alt="close"
            />
            <div
              onClick={() => setCategories(!categories)}
              className="flex flex-col items-center hover:bg-gray-200 hover:cursor-pointer pb-8"
            >
              <img
                className="mt-10 h-[38px] w-[38px]"
                src={categoriesImg}
                alt="categories"
              />
              <h1 className="mt-2 text-2xl font-semibold">Categories</h1>
            </div>
            <div
              className={
                categories ? "visibility: visible" : "visibility: hidden"
              }
            >
              <div className="bg-green-300">
                <h1 className="text-2xl font-thin pl-2 py-1 border-t-1 border-solid border-black">
                  Expenses
                </h1>
              </div>
              <ul className="flex flex-col">
                <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
                  <img className="h-8 w-8" src={hygiene} alt="hygiene" />
                  Hygiene
                </li>
                <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
                  <img className="h-8 w-8" src={food} alt="food" />
                  Food
                </li>
                <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
                  <img className="h-8 w-8" src={home} alt="home" />
                  Home
                </li>
                <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
                  <img className="h-8 w-8" src={health} alt="health" />
                  Health
                </li>
                <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
                  <img className="h-8 w-8" src={cafe} alt="cafe" />
                  Cafe
                </li>
                <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
                  <img className="h-8 w-8" src={car} alt="car" />
                  Car
                </li>
                <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
                  <img className="h-8 w-8" src={clothes} alt="clothes" />
                  Clothes
                </li>
                <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
                  <img className="h-8 w-8" src={pets} alt="pets" />
                  Pets
                </li>
                <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
                  <img className="h-8 w-8" src={gifts} alt="gifts" />
                  Gifts
                </li>
                <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
                  <img
                    className="h-8 w-8"
                    src={entertainment}
                    alt="entertainment"
                  />
                  Entertainment
                </li>
                <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
                  <img className="h-8 w-8" src={connection} alt="connection" />
                  Connection
                </li>
                <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
                  <img className="h-8 w-8" src={sport} alt="sport" />
                  Sport
                </li>
                <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
                  <img className="h-8 w-8" src={bills} alt="bills" />
                  Bills
                </li>
                <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
                  <img className="h-8 w-8" src={taxi} alt="taxi" />
                  Taxi
                </li>
                <li className="flex flex-row gap-2 items-center hover:bg-green-300 hover: cursor-pointer">
                  <img
                    className="h-12 w-12 object-contain"
                    src={transport}
                    alt="transport"
                  />
                  Transport
                </li>
              </ul>
              <div className="bg-green-300">
                <h1 className="text-2xl font-thin pl-2 py-1">Incomes</h1>
              </div>
              <ul className="flex flex-col">
                <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
                  <img className="h-8 w-8" src={deposits} alt="deposits" />
                  Deposits
                </li>
                <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
                  <img className="h-8 w-8" src={salary} alt="salary" />
                  Salary
                </li>
              </ul>
            </div>
          </div>

          <div
            onClick={() => {
              setSidebar(false);
              setCategories(false);
            }}
            className={
              sidebar
                ? "absolute z-10 top-0 left-0 bg-gray-900 w-full h-full bg-opacity-30 hover:cursor-pointer"
                : ""
            }
          />
        </section>
      </div>
    </>
  );
}

export default App;
