import { useEffect } from "react";
import { useMonefy } from "../context/MonefyContext";
import { motion } from "framer-motion";

const History = () => {
  const { dates, formatCurrency, openItems, toggleItems, history, darkMode } =
    useMonefy();

  useEffect(() => {
    localStorage.setItem("dates3", JSON.stringify(dates));
  }, [dates]);

  const calcTotal = (date: string) => {
    let total: number = 0;
    for (let i = 0; i < dates[date].length; i++) {
      total += dates[date][i].amount;
    }
    return formatCurrency(total);
  };

  const totalTextColor = (date: string) => {
    let green: number = 0;
    let red: number = 0;
    for (let i = 0; i < dates[date].length; i++) {
      if (
        dates[date][i].name === "Deposits" ||
        dates[date][i].name === "Salary"
      ) {
        green += dates[date][i].amount;
      } else {
        red += dates[date][i].amount;
      }
    }
    return green > red ? "text-green-500" : "text-red-400";
  };

  return (
    <>
      <div
        className={`
          ${
            history
              ? "transition-all ease-in-out duration-500 overflow-auto scrollbar-hide flex gap-2 flex-col pt-4 items-center justify-start absolute top-10 h-[368px] w-full bg-gray-200"
              : "transition-all ease-in-out duration-500 opacity-0 pointer-events-none absolute top-0"
          }
            ${
              history && darkMode
                ? "transition-all ease-in-out duration-500 overflow-auto scrollbar-hide flex gap-2 flex-col pt-4 items-center justify-start absolute top-10 h-[368px] w-full bg-gray-500"
                : ""
            }
        `}
      >
        <h1 className="font-bold text-lg">Incomes and expenses history</h1>
        <h2>
          {Object.entries(dates).map(([date, el]) => (
            <ul key={date}>
              <div className="flex items-center gap-32">
                <div
                  onClick={() => toggleItems(date)}
                  className="flex items-center"
                >
                  <motion.svg
                    className="hover:cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      d={
                        openItems[date]
                          ? "M12 20.5l-7-7h14l-7 7z"
                          : "M12 3.5l-7 7h14l-7-7z"
                      }
                    />
                  </motion.svg>
                  <div>{date}</div>
                </div>
                <div className={totalTextColor(date)}>
                  {calcTotal(date)}&#8372;
                </div>
              </div>
              {el.map((entry) => (
                <li key={entry.id} className="flex pb-1">
                  <div
                    className={
                      openItems[date]
                        ? "transition-all ease-in-out duration-500 opacity-100 flex w-full justify-between"
                        : "transition-all ease-in-out duration-500 absolute top-0 opacity-0 pointer-events-none"
                    }
                  >
                    <div className="flex w-[100px] flex-col text-left">
                      <div
                        className={
                          entry.name === "Salary" || entry.name === "Deposits"
                            ? "text-green-500"
                            : "text-red-400"
                        }
                      >
                        {entry.name}
                      </div>
                    </div>
                    <div className="flex w-[100px] flex-col text-right">
                      <div>{formatCurrency(entry.amount)}&#8372;</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ))}
        </h2>
      </div>
    </>
  );
};

export default History;
