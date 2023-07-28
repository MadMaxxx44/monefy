type OverlayProps = {
  setSidebar: (arg0: boolean) => void;
  setCategories: (arg0: boolean) => void;
  sidebar: boolean;
};

const Overlay = ({ setSidebar, setCategories, sidebar }: OverlayProps) => {
  return (
    <div
      onClick={() => {
        setSidebar(false);
        setCategories(false);
      }}
      className={
        sidebar
          ? "transition-all ease-in-out duration-500 absolute z-10 top-0 left-0 bg-gray-900 w-full h-full bg-opacity-30 hover:cursor-pointer"
          : ""
      }
    />
  );
};

export default Overlay;
