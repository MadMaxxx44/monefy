import categoriesImg from "../images/categories.png";
import close from "../images/close.png";
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

const Sidebar = () => {
  const {
    sidebar,
    closeSidebar,
    categories,
    closeCategories,
    toggleCategories,
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
  return (
    <div
      className={
        sidebar
          ? "transition-all ease-in-out duration-500 z-20 scrollbar-hide absolute top-0 bottom-0 right-0 lg:right-0 w-[300px] overflow-y-auto bg-gray-50"
          : "transition-all ease-in-out duration-500 absolute top-[-350px] right-0 opacity-0 pointer-events-none"
      }
    >
      <img
        onClick={() => {
          closeSidebar();
          closeCategories();
        }}
        className="absolute left-0 h-10 w-10 p-2 hover:cursor-pointer hover:bg-green-300 hover:border-x-2 hover:border-b-2 hover:border-solid"
        src={close}
        alt="close"
      />
      <div
        onClick={toggleCategories}
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
          categories
            ? "visible transition-all ease-in-out duration-500"
            : "opacity-0 pointer-events-none"
        }
      >
        <div className="bg-green-300">
          <h1 className="text-2xl font-thin pl-2 py-1 border-t-1 border-solid border-black">
            Expenses
          </h1>
        </div>
        <ul className="flex flex-col">
          <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
            <img className="h-8 w-8" src={hygiene} alt={hygieneStr} />
            {hygieneStr}
          </li>
          <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
            <img className="h-8 w-8" src={food} alt={foodStr} />
            {foodStr}
          </li>
          <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
            <img className="h-8 w-8" src={home} alt={homeStr} />
            {homeStr}
          </li>
          <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
            <img className="h-8 w-8" src={health} alt={healthStr} />
            {healthStr}
          </li>
          <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
            <img className="h-8 w-8" src={cafe} alt={cafeStr} />
            {cafeStr}
          </li>
          <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
            <img className="h-8 w-8" src={car} alt={carStr} />
            {carStr}
          </li>
          <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
            <img className="h-8 w-8" src={clothes} alt={clothesStr} />
            {clothesStr}
          </li>
          <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
            <img className="h-8 w-8" src={pets} alt={petsStr} />
            {petsStr}
          </li>
          <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
            <img className="h-8 w-8" src={gifts} alt={giftsStr} />
            {giftsStr}
          </li>
          <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
            <img
              className="h-8 w-8"
              src={entertainment}
              alt={entertainmentStr}
            />
            {entertainmentStr}
          </li>
          <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
            <img className="h-8 w-8" src={connection} alt={connectionStr} />
            {connectionStr}
          </li>
          <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
            <img className="h-8 w-8" src={sport} alt={sportStr} />
            {sportStr}
          </li>
          <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
            <img className="h-8 w-8" src={bills} alt={billsStr} />
            {billsStr}
          </li>
          <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
            <img className="h-8 w-8" src={taxi} alt={taxiStr} />
            {taxiStr}
          </li>
          <li className="flex flex-row pl-2 py-2 gap-2 items-center hover:bg-green-300 hover: cursor-pointer">
            <img
              className="h-8 w-8 object-contain"
              src={transport}
              alt={transportStr}
            />
            {transportStr}
          </li>
        </ul>
        <div className="bg-green-300">
          <h1 className="text-2xl font-thin pl-2 py-1">Incomes</h1>
        </div>
        <ul className="flex flex-col">
          <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
            <img className="h-8 w-8" src={deposits} alt={depositsStr} />
            {depositsStr}
          </li>
          <li className="flex flex-row py-2 pl-2 gap-4 items-center hover:bg-green-300 hover: cursor-pointer">
            <img className="h-8 w-8" src={salary} alt={salaryStr} />
            {salaryStr}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
