import { useEffect } from "react";
import { useMonefy } from "../context/MonefyContext";

const History = () => {
  const { dates, formatCurrency, openItems, toggleItems, history } =
    useMonefy();

  useEffect(() => {
    localStorage.setItem("dates2", JSON.stringify(dates));
  }, [dates]);

  return (
    <>
      <div
        className={
          history
            ? "transition-all ease-in-out duration-500 overflow-auto scrollbar-hide flex gap-2 flex-col pt-4 items-center justify-start absolute top-10 h-[348px] w-full bg-gray-500"
            : "transition-all ease-in-out duration-500 opacity-0 pointer-events-none absolute top-0"
        }
      >
        <h1>Incomes and expenses history</h1>
        <h2>
          {Object.entries(dates).map(([date, el]) => (
            <ul key={date}>
              <div className="flex items-center gap-32">
                <div
                  onClick={() => toggleItems(date)}
                  className="flex items-center"
                >
                  <svg
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
                  </svg>
                  <div>{date}</div>
                </div>
                <div>TOTAL</div>
              </div>
              {el.map((entry) => (
                <li key={entry.id} className="flex pb-2">
                  <div
                    className={
                      openItems[date]
                        ? "transition-all ease-in-out duration-500 opacity-100 flex w-full justify-center"
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
