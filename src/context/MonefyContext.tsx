import { createContext, ReactNode, useContext, useState } from "react";

interface HistoryArr {
  id: string;
  // date: Date;
  name: string;
  amount: number;
}

interface Dates {
  [date: string]: HistoryArr[];
}

type MonefyProviderProps = {
  children: ReactNode;
};

type MonefyContext = {
  sidebar: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  categories: boolean;
  openCategories: () => void;
  closeCategories: () => void;
  toggleCategories: () => void;
  green: number;
  setGreen: (arg: number) => void;
  red: number;
  setRed: (arg0: number) => void;
  balance: number;
  setBalance: (arg0: number) => void;
  formatCurrency: (arg0: number) => string;
  form: boolean;
  openForm: () => void;
  closeForm: () => void;
  input: string;
  setInput: (arg0: string) => void;
  isLocked: boolean;
  locked: () => void;
  unlocked: () => void;
  expenseForm: boolean;
  openExpenseForm: () => void;
  closeExpenseForm: () => void;
  dataArr: number[];
  setDataArr: (arg0: number[]) => void;
  history: boolean;
  toggleHistory: () => void;
  historyArr: HistoryArr[];
  setHistoryArr: (arg0: HistoryArr[]) => void;
  arrow: boolean;
  toggleArrow: () => void;
  depositsStr: string;
  salaryStr: string;
  hygieneStr: string;
  foodStr: string;
  homeStr: string;
  healthStr: string;
  cafeStr: string;
  carStr: string;
  clothesStr: string;
  petsStr: string;
  entertainmentStr: string;
  giftsStr: string;
  connectionStr: string;
  sportStr: string;
  billsStr: string;
  taxiStr: string;
  transportStr: string;
};

const MonefyContext = createContext({} as MonefyContext);

// eslint-disable-next-line react-refresh/only-export-components
export function useMonefy() {
  return useContext(MonefyContext);
}

export function MonefyProvider({ children }: MonefyProviderProps) {
  const [sidebar, setSidebar] = useState(false);
  const openSidebar = () => setSidebar(true);
  const closeSidebar = () => setSidebar(false);
  const [categories, setCategories] = useState(false);
  const openCategories = () => setCategories(true);
  const closeCategories = () => setCategories(false);
  const toggleCategories = () => setCategories(!categories);
  const [green, setGreen] = useState(0);
  const [red, setRed] = useState(0);
  const [balance, setBalance] = useState(0);
  const [form, setForm] = useState(false);
  const openForm = () => setForm(true);
  const closeForm = () => setForm(false);
  const [input, setInput] = useState("0");
  const [isLocked, setIsLocked] = useState(true);
  const locked = () => setIsLocked(true);
  const unlocked = () => setIsLocked(false);
  const [expenseForm, setExpenseForm] = useState(false);
  const openExpenseForm = () => setExpenseForm(true);
  const closeExpenseForm = () => setExpenseForm(false);
  const [dataArr, setDataArr] = useState<number[]>(new Array(15).fill(0));
  const [history, setHistory] = useState(false);
  const toggleHistory = () => setHistory(!history);
  const [historyArr, setHistoryArr] = useState<HistoryArr[]>([]);
  const [arrow, setArrow] = useState(false);
  const toggleArrow = () => setArrow(!arrow);
  const depositsStr: string = "Deposits";
  const salaryStr: string = "Salary";
  const hygieneStr: string = "Hygiene";
  const foodStr: string = "Food";
  const homeStr: string = "Home";
  const healthStr: string = "Health";
  const cafeStr: string = "Cafe";
  const carStr: string = "Car";
  const clothesStr: string = "Clothes";
  const petsStr: string = "Pets";
  const entertainmentStr: string = "Entertainment";
  const giftsStr: string = "Gifts";
  const connectionStr: string = "Connection";
  const sportStr: string = "Sport";
  const billsStr: string = "Bills";
  const taxiStr: string = "Taxi";
  const transportStr: string = "Transport";

  const formatter = new Intl.NumberFormat(undefined, {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formatCurrency = (number: number) => {
    return formatter.format(number);
  };

  return (
    <MonefyContext.Provider
      value={{
        sidebar,
        openSidebar,
        closeSidebar,
        categories,
        openCategories,
        closeCategories,
        toggleCategories,
        green,
        setGreen,
        red,
        setRed,
        balance,
        setBalance,
        formatCurrency,
        form,
        openForm,
        closeForm,
        input,
        setInput,
        isLocked,
        locked,
        unlocked,
        expenseForm,
        openExpenseForm,
        closeExpenseForm,
        dataArr,
        setDataArr,
        history,
        toggleHistory,
        historyArr,
        setHistoryArr,
        arrow,
        toggleArrow,
        depositsStr,
        salaryStr,
        hygieneStr,
        foodStr,
        homeStr,
        healthStr,
        cafeStr,
        carStr,
        clothesStr,
        petsStr,
        entertainmentStr,
        giftsStr,
        connectionStr,
        sportStr,
        billsStr,
        taxiStr,
        transportStr,
      }}
    >
      {children}
    </MonefyContext.Provider>
  );
}
