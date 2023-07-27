import dots from "./../images/dots.png";

type HeaderProps = {
  setSidebar: (arg0: boolean) => void;
};

const Header = ({ setSidebar }: HeaderProps) => {
  return (
    <header className="flex h-10 w-full bg-green-500 justify-between px-4 border-b-2 border-solid items-center text-2xl font-serif">
      <h1 className="font-bold">Monefy</h1>
      <img
        onClick={() => setSidebar(true)}
        className="h-5 hover:cursor-pointer"
        src={dots}
        alt="menu"
      />
    </header>
  );
};

export default Header;
