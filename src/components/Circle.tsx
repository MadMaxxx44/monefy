import { useEffect } from "react";
import { useMonefy } from "../context/MonefyContext";

const Circle = () => {
  const { green, red, formatCurrency } = useMonefy();

  const arr: string[] = [
    "Hygiene",
    "Food",
    "Home",
    "Health",
    "Cafe",
    "Car",
    "Clothes",
    "Pets",
    "Gifts",
    "Entertainment",
    "Connection",
    "Sport",
    "Bills",
    "Taxi",
    "Transport",
  ];

  // const outline = 100%;
  const circle =
    "flex flex-col w-28 h-28 justify-center items-center rounded-full bg-gray-200 ring-4 ring-blue-500";

  useEffect(() => {
    arr.map((el: string) => el + "t");
  }, [red]);

  return (
    <div className={circle}>
      <div className="text-green-500 font-black">
        {formatCurrency(green)}&#8372;
      </div>
      <div className="text-red-400 font-black">
        -{formatCurrency(red)}&#8372;
      </div>
    </div>
  );
};

export default Circle;
