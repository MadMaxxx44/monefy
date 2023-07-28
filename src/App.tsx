import { useState } from "react";
import Header from "./components/Header";
import Circle from "./components/Circle";
import Balance from "./components/Balance";
import AddSub from "./components/AddSub";
import Sidebar from "./components/Sidebar";
import Overlay from "./components/Overlay";

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
      <div className="flex h-screen w-screen justify-center items-center font-serif">
        <section className="flex-col h-3/5 w-3/5 relative border-2 border-solid">
          <Header setSidebar={setSidebar} />
          <div className="flex flex-col w-full h-full justify-center items-center">
            <Circle green={green} red={red} />
            <Balance balance={balance} balanceBgDefault={balanceBgDefault} />
            <AddSub />
          </div>
          <Sidebar
            categories={categories}
            sidebar={sidebar}
            setSidebar={setSidebar}
            setCategories={setCategories}
          />
          <Overlay
            setSidebar={setSidebar}
            sidebar={sidebar}
            setCategories={setCategories}
          />
        </section>
      </div>
    </>
  );
}

export default App;
