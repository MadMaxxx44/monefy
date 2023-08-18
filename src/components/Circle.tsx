import { useEffect, useState } from "react";
import { useMonefy } from "../context/MonefyContext";

const Circle = () => {
  const { green, red, formatCurrency, auth, api } = useMonefy();
  const [greenValue, setGreenValue] = useState(0);
  const [redValue, setRedValue] = useState(0);

  const circle =
    "flex flex-col w-28 h-28 justify-center items-center rounded-full";

  useEffect(() => {
    localStorage.setItem("green3", JSON.stringify(green));
  }, [green]);

  useEffect(() => {
    localStorage.setItem("red3", JSON.stringify(red));
  }, [red]);

  const getGreen = async () => {
    try {
      const resp = await api.get(`/green/${auth.user}`);
      console.log(resp?.data?.green);
      return resp.data.green;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  useEffect(() => {
    const fetchGreenValue = async () => {
      const value = await getGreen();
      setGreenValue(value);
    };
    fetchGreenValue();
  }, [green]);

  const getRed = async () => {
    try {
      const resp = await api.get(`/red/${auth.user}`);
      console.log(resp?.data?.red);
      return resp.data.red;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  useEffect(() => {
    const fetchRedValue = async () => {
      const value = await getRed();
      setRedValue(value);
    };
    fetchRedValue();
  }, [red]);

  return (
    <div className={circle}>
      <div className="text-green-500 font-black">
        {formatCurrency(greenValue)}&#8372;
      </div>
      <div className="text-red-400 font-black">
        -{formatCurrency(redValue)}&#8372;
      </div>
    </div>
  );
};

export default Circle;
