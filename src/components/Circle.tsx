import { useEffect } from "react";
import { useMonefy } from "../context/MonefyContext";

const Circle = () => {
  const { green, red, formatCurrency } = useMonefy();

  const circle =
    "flex flex-col w-28 h-28 justify-center items-center rounded-full";

  useEffect(() => {
    localStorage.setItem("green", JSON.stringify(green));
  }, [green]);

  useEffect(() => {
    localStorage.setItem("red", JSON.stringify(red));
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
