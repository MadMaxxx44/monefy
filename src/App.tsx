import { useState } from "react";
import dots from "../images/dots.png";
import categories from "../images/categories.png"
import close from "../images/close.png"

function App() {
  const [state, setState] = useState(false)

  const green: number = 10003;
  const red: number = 10002;
  const balance: number = green - red;
  const balanceBg: string = green > red ? "bg-green-500" : "bg-red-400";
  const balanceBgDefault: string = balance == 0 ? "bg-gray-200" : balanceBg;

  return (
    <>
      <div className="flex h-screen w-screen justify-center items-center">
        <section className="flex-col h-3/5 w-3/5 relative border-2 border-solid">
          <header className="flex h-10 w-full bg-green-500 justify-between px-4 border-b-2 border-solid items-center text-2xl font-serif">
            <h1 className="font-bold">Monefy</h1>
            <img onClick={() => setState(true)} className="h-5 hover:cursor-pointer" src={dots} alt="menu" />
          </header>
          <div className="flex flex-col w-full h-full justify-center items-center">
            <div className="flex flex-col h-1/4 w-1/4 justify-center items-center rounded-full bg-slate-300">
              <div className="text-green-500 font-black">{green}&#8372;</div>
              <div className="text-red-400 font-black">{red}&#8372;</div>
            </div>
            <button
              className={`flex text-2xl items-center w-fit h-8 p-4 mt-20 mb-14 ${balanceBgDefault} hover:animate__bounceIn`}
            >
              Balance {balance}&#8372;
            </button>
            <div className="flex w-52 justify-between">
              <div className="flex justify-center rounded-full outline outline-3 outline-red-400 border-gray-400 pb-2 h-14 w-14 hover:bg-gray-100 hover:cursor-pointer hover:border-1 hover:border-solid">
                <button className="text-red-400 font-black text-4xl">-</button>
              </div>
              <div className="flex justify-center rounded-full outline outline-3 outline-green-500 border-gray-400 pb-0.5 h-14 w-14 hover:bg-gray-100 hover:cursor-pointer hover:border-1 hover:border-solid">
                <button className="text-green-500 font-black text-4xl">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className={state ? "sidebar absolute top-0 bottom-0 lg:right-0 w-[300px] overflow-y-auto text-center bg-green-900" : ""}>
            <div className="flex flex-col items-center hover:bg-green-200 hover:cursor-pointer pb-8">
              <img 
                onClick={() => setState(false)}
                className="absolute left-0 h-10 w-10 p-2 hover:bg-green-900" 
                src={close} 
                alt="close"/>
              <img className="mt-10 h-8 w-8" src={categories} alt="categories"/>
              <h1 className="mt-2 text-2xl font-semibold">Categories</h1>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
