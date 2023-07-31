import { useMonefy } from "../context/MonefyContext";

const Overlay = () => {
  const { sidebar, closeSidebar, closeCategories } = useMonefy();
  return (
    <div
      onClick={() => {
        closeSidebar();
        closeCategories();
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
