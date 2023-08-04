import { useEffect } from "react";
import { useMonefy } from "../context/MonefyContext";
import { motion } from "framer-motion";

const Balance = () => {
  const {
    green,
    red,
    balance,
    setBalance,
    formatCurrency,
    history,
    toggleHistory,
    historyArr,
    arrow,
    toggleArrow,
  } = useMonefy();

  const balanceBg: string = green > red ? "bg-green-500" : "bg-red-400";
  const balanceBgDefault: string = balance == 0 ? "bg-gray-200" : balanceBg;
  const path: string = arrow
    ? "M12 3.5l-7 7h14l-7-7z"
    : "M12 20.5l-7-7h14l-7 7z";

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
          className={`flex text-2xl items-center w-fit h-8 p-4 mt-5 mb-7 ${balanceBgDefault}`}
        >
          Balance {formatCurrency(balance)}&#8372;
        </button>
      </motion.div>
      <div
        className={
          history
            ? "transition-all ease-in-out duration-500 overflow-auto scrollbar-hide flex gap-2 flex-col pt-4 items-center justify-start absolute top-10 h-[348px] w-full bg-gray-500"
            : "transition-all ease-in-out duration-500 absolute top-0 opacity-0 pointer-events-none"
        }
      >
        <h1>Incomes and expenses history</h1>
        <div className="flex items-center gap-28">
          <div className="flex items-center">
            <svg
              onClick={toggleArrow}
              className="hover:cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d={path} />
            </svg>
            <div>Date</div>
          </div>
          <div>Total</div>
        </div>
        <h2 className={arrow ? "opacity-0" : "opacity-100"}>
          {historyArr.map((el) => (
            <ul key={el.id}>
              <li className="flex pb-2">
                <div className="flex w-[100px] flex-col text-left">
                  <div>{el.name}</div>
                </div>
                <div className="flex w-[100px] flex-col text-right">
                  <div>{formatCurrency(el.amount)}&#8372;</div>
                </div>
              </li>
            </ul>
          ))}
        </h2>
      </div>
    </>
  );
};

export default Balance;
