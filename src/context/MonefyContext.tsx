import axios, { AxiosInstance } from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface Dates {
  [date: string]: {
    id: string;
    name: string;
    amount: number;
  }[];
}

type MonefyProviderProps = {
  children: ReactNode;
};

type OBG = {
  user: string;
  accessToken: number;
};

type MonefyContext = {
  api: AxiosInstance;
  auth: OBG;
  setAuth: (arg0: OBG) => void;
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
  dates: Dates;
  setDates: (arg0: Dates) => void;
  openItems: Record<string, boolean>;
  toggleItems: (arr0: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  newChartValue: number[];
  setNewChartValue: (arg0: number[]) => void;
  // sendData: (arg0: Dates) => void;
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
  const [auth, setAuth] = useState({
    user: "",
    accessToken: 0,
  });
  const [sidebar, setSidebar] = useState(false);
  const openSidebar = () => setSidebar(true);
  const closeSidebar = () => setSidebar(false);
  const [categories, setCategories] = useState(false);
  const openCategories = () => setCategories(true);
  const closeCategories = () => setCategories(false);
  const toggleCategories = () => setCategories(!categories);
  const [green, setGreen] = useState(() => {
    const localValue = localStorage.getItem("green3");
    if (localValue == null) return 0;
    return JSON.parse(localValue) as number;
  });
  const [red, setRed] = useState(() => {
    const localValue = localStorage.getItem("red3");
    if (localValue == null) return 0;
    return JSON.parse(localValue) as number;
  });
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
  const [dataArr, setDataArr] = useState<number[]>(() => {
    const localValue = localStorage.getItem("dataArr3");
    if (localValue == null) return new Array(15).fill(0);
    return JSON.parse(localValue) as number[];
  });
  const [history, setHistory] = useState(false);
  const toggleHistory = () => setHistory(!history);
  const [dates, setDates] = useState<Dates>(() => {
    const localValue = localStorage.getItem("dates3");
    if (localValue == null) return {};
    return JSON.parse(localValue) as Dates;
  });
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const toggleItems = (arg0: string) => {
    const updatedOpenItems = { ...openItems };
    updatedOpenItems[arg0] = !updatedOpenItems[arg0];
    setOpenItems(updatedOpenItems);
  };
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const [newChartValue, setNewChartValue] = useState<number[]>(
    new Array(15).fill(0)
  );
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

  const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const getChart = async () => {
    try {
      const resp = await api.get(`/chart/${auth.user}`);
      console.log(resp?.data?.chart);
      return resp.data.chart;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  useEffect(() => {
    const fetchChart = async () => {
      const value = await getChart();
      setNewChartValue(value);
    };
    fetchChart();
  }, [dataArr]);

  // const sendData = async (data: Dates) => {
  //   try {
  //     const resp = await axios.post("/store", { dates: data });
  //     console.log(resp.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <MonefyContext.Provider
      value={{
        api,
        auth,
        setAuth,
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
        dates,
        setDates,
        openItems,
        toggleItems,
        darkMode,
        toggleDarkMode,
        newChartValue,
        setNewChartValue,
        // sendData,
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
