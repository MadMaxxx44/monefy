type BalanceProps = {
  balanceBgDefault: string;
  balance: number;
};

const Balance = ({ balance, balanceBgDefault }: BalanceProps) => {
  return (
    <button
      className={`flex text-2xl items-center w-fit h-8 p-4 mt-20 mb-14 ${balanceBgDefault}`}
    >
      Balance {balance}&#8372;
    </button>
  );
};

export default Balance;
