import Header from "./components/Header";
import Circle from "./components/Circle";
import Balance from "./components/Balance";
import AddSub from "./components/AddSub";
import Sidebar from "./components/Sidebar";
import Overlay from "./components/Overlay";
import { MonefyProvider } from "./context/MonefyContext";
import Chart from "./components/Chart";

function App() {
  return (
    <>
      <MonefyProvider>
        <div className="flex h-screen w-screen justify-center items-center font-serif">
          <section className="flex-col h-[600px] w-[600px] relative border-2 border-solid">
            <Header />
            <div className="flex flex-col w-full h-full justify-start items-center">
              <div className="relative w-[55%] h-[55%]">
                <Chart />
                <div className="absolute top-[33%] left-[32.5%]">
                  <Circle />
                </div>
              </div>
              <Balance />
              <AddSub />
            </div>
            <Sidebar />
            <Overlay />
          </section>
        </div>
      </MonefyProvider>
    </>
  );
}

export default App;
