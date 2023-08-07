import { useEffect } from "react";
import { useMonefy } from "../context/MonefyContext";
import { motion } from "framer-motion";
import History from "./History";

const Balance = () => {
  const { green, red, balance, setBalance, formatCurrency, toggleHistory } =
    useMonefy();

  const balanceBg: string = green > red ? "bg-green-500" : "bg-red-400";
  const balanceBgDefault: string = balance == 0 ? "bg-gray-200" : balanceBg;

  useEffect(() => {
    setBalance(green - red);
  }, [green, red, setBalance]);

  return (
    <>
      <motion.div
        whileTap={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <button
          onClick={toggleHistory}
          className={`flex text-2xl items-center w-fit h-8 p-4 mt-10 mb-7 ${balanceBgDefault}`}
        >
          Balance {formatCurrency(balance)}&#8372;
        </button>
      </motion.div>
      <History />
    </>
  );
};

export default Balance;
