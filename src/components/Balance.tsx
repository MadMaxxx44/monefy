import { useEffect } from "react";
import { useMonefy } from "../context/MonefyContext";

const Balance = () => {
  const { green, red, balance, setBalance, formatCurrency } = useMonefy();

  const balanceBg: string = green > red ? "bg-green-500" : "bg-red-400";
  const balanceBgDefault: string = balance == 0 ? "bg-gray-200" : balanceBg;

  useEffect(() => {
    setBalance(green - red);
  }, [green, red, setBalance]);

  return (
    <button
      className={`flex text-2xl items-center w-fit h-8 p-4 mt-20 mb-14 ${balanceBgDefault}`}
    >
      Balance {formatCurrency(balance)}&#8372;
    </button>
  );
};

export default Balance;
