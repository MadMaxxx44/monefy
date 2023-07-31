import Header from "./components/Header";
import Circle from "./components/Circle";
import Balance from "./components/Balance";
import AddSub from "./components/AddSub";
import Sidebar from "./components/Sidebar";
import Overlay from "./components/Overlay";
import { MonefyProvider } from "./context/MonefyContext";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

function App() {
  return (
    <>
      <MonefyProvider>
        <div className="flex h-screen w-screen justify-center items-center font-serif">
          <section className="flex-col h-[600px] w-[600px] relative border-2 border-solid">
            <Header />
            <div className="flex flex-col w-full h-full justify-center items-center">
              <Circle />
              <Balance />
              <AddSub />
            </div>
            <Sidebar />
            <Overlay />
          </section>
        </div>
      </MonefyProvider>
      <div className="flex w-screen justify-center">
        <Doughnut className="max-h-[600px] max-w-[600px]" data={data} />
      </div>
    </>
  );
}

export default App;
