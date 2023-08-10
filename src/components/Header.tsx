import { useMonefy } from "../context/MonefyContext";
import dots from "./../images/dots.png";

const Header = () => {
  const { openSidebar, toggleDarkMode } = useMonefy();

  return (
    <header className="flex h-10 w-full bg-green-500 justify-between px-4 border-b-2 border-solid items-center text-2xl font-serif">
      <h1 className="font-bold">Monefy</h1>
      <div className="flex items-center">
        <input type="checkbox" onClick={toggleDarkMode} />
        <div className="text-sm font-bold pr-4">DarkTheme</div>
        <img
          onClick={openSidebar}
          className="h-5 hover:cursor-pointer"
          src={dots}
          alt="sidebar"
        />
      </div>
    </header>
  );
};

export default Header;
