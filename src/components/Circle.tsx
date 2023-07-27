type CircleProps = {
  green: number;
  red: number;
};

const Circle = ({ green, red }: CircleProps) => {
  return (
    <div className="flex flex-col w-28 h-28 justify-center items-center rounded-full bg-slate-300">
      <div className="text-green-500 font-black">{green}&#8372;</div>
      <div className="text-red-400 font-black">{red}&#8372;</div>
    </div>
  );
};

export default Circle;
