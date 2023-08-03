/* eslint-disable @typescript-eslint/no-explicit-any */
import hygiene from "../images/hygiene.png";
import food from "../images/food.png";
import home from "../images/home.png";
import health from "../images/health.png";
import cafe from "../images/cafe.png";
import car from "../images/car.png";
import clothes from "../images/clothes.png";
import pets from "../images/pets.png";
import entertainment from "../images/entertainment.png";
import gifts from "../images/gifts.png";
import connection from "../images/connection.png";
import sport from "../images/sport.png";
import bills from "../images/bills.png";
import taxi from "../images/taxi.png";
import transport from "../images/transport.png";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useMonefy } from "../context/MonefyContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const doughnutLabelsLine = {
  id: "doughnutLabelsLine",
  afterDraw(chart: any) {
    const {
      ctx,
      chartArea: { width, height },
    } = chart;

    chart.data.datasets.forEach((dataset: any, i: number) => {
      chart.getDatasetMeta(i).data.forEach((datapoint: any, index: number) => {
        const { x, y } = datapoint.tooltipPosition();

        const halfHeight = height / 1.9;
        const halfWidth = width / 1.9;

        const xLine = x > halfWidth ? x + 20 : x - 20;
        const yLine = y > halfHeight ? y + 20 : y - 20;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(xLine, yLine);
        ctx.strokeStyle = dataset.backgroundColor[index];
        ctx.stroke();

        const img = new Image();
        img.src = chart.data.datasets[0].images[index];
        const imgHeight = 35;
        const imgWidth = 35;

        const xImg = x >= halfWidth ? xLine : xLine - 32;
        const yImg = y >= halfHeight ? yLine : yLine - 32;

        ctx.drawImage(img, xImg, yImg, imgHeight, imgWidth);
      });
    });
  },
};

// eslint-disable-next-line react-refresh/only-export-components
const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  layout: {
    padding: 60,
  },
};

// eslint-disable-next-line react-refresh/only-export-components
const plugins = [doughnutLabelsLine];

const Chart = () => {
  const { dataArr } = useMonefy();

  // eslint-disable-next-line react-refresh/only-export-components
  const data = {
    labels: [
      "Hygiene",
      "Food",
      "Home",
      "Health",
      "Cafe",
      "Car",
      "Clothes",
      "Pets",
      "Gifts",
      "Enterntainment",
      "Connection",
      "Sport",
      "Bills",
      "Taxi",
      "Transport",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: dataArr,
        backgroundColor: [
          "rgba(255, 0, 0, 1)",
          "rgba(0, 128, 0, 1)",
          "rgba(0, 0, 255, 1)",
          "rgba(255, 162, 0, 1)",
          "rgba(0, 255, 255, 1)",
          "rgba(255, 0, 255, 1)",
          "rgba(255, 165, 0, 1)",
          "rgba(128, 0, 128, 1)",
          "rgba(255, 192, 203, 1)",
          "rgba(0, 128, 128, 1)",
          "rgba(0, 255, 0, 1)",
          "rgba(75, 0, 130, 1)",
          "rgba(165, 42, 42, 1)",
          "rgba(0, 0, 0, 1)",
          "rgba(12, 100, 255, 1)",
        ],
        borderWidth: 0,
        cutout: "85%",
        images: [
          hygiene,
          food,
          home,
          health,
          cafe,
          car,
          clothes,
          pets,
          gifts,
          entertainment,
          connection,
          sport,
          bills,
          taxi,
          transport,
        ],
      },
    ],
  };

  return <Doughnut data={data} options={options} plugins={plugins} />;
};

export default Chart;
