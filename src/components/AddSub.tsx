import NewForm from "./NewForm.tsx";
import { useMonefy } from "../context/MonefyContext.tsx";

const AddSub = () => {
  const { openForm, openExpenseForm } = useMonefy();

  return (
    <>
      <div className="flex w-52 justify-between">
        <div
          onClick={() => {
            openForm();
            openExpenseForm();
          }}
          className="flex justify-center rounded-full outline outline-3 outline-red-400 border-gray-400 pb-1 h-14 w-14 hover:bg-gray-100 hover:cursor-pointer hover:border-1 hover:border-solid"
        >
          <button className="text-red-400 font-black text-4xl">-</button>
        </div>
        <div
          onClick={openForm}
          className="flex justify-center rounded-full outline outline-3 outline-green-500 border-gray-400 pb-0.5 h-14 w-14 hover:bg-gray-100 hover:cursor-pointer hover:border-1 hover:border-solid"
        >
          <button className="text-green-500 font-black text-4xl">+</button>
        </div>
      </div>
      <NewForm />
    </>
  );
};

export default AddSub;
