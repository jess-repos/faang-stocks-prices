import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import classes from "./Chart.module.css";
const StockPrices = ({ data }) => {
  let delayed;
  const first = data.date[0];
  const last = data.date[999];
  return (
    <div>
      <h2>
        Trend {first}-{last}
      </h2>
      <div className={classes.line}>
        <Chart
          type="line"
          data={{
            labels: data.date,
            datasets: [
              {
                data: data.open,
                label: "Open",
                fill: true,
                // backgroundColor: "rgba(235, 64, 52, 0.3)", // graph background
                borderColor: "#fd9cff", // line color
                pointBackgroundColor: "#fd9cff", // point color
                // tension: 0.4, // lince curve (0-1)
                borderWidth: 1,
                yAxisID: "y",
                xAxisID: "x",
              },
              {
                data: data.high,
                label: "High",
                fill: true,
                // backgroundColor: "rgba(235, 64, 52, 0.3)", // graph background
                borderColor: "#45ecff", // line color
                pointBackgroundColor: "#45ecff", // point color
                // tension: 0.4, // lince curve (0-1)
                borderWidth: 1,
                yAxisID: "y",
                xAxisID: "x",
              },
              {
                data: data.low,
                label: "Low",
                fill: true,
                // backgroundColor: "rgba(235, 64, 52, 0.3)", // graph background
                borderColor: "#f56c6c", // line color
                pointBackgroundColor: "#f56c6c", // point color
                // tension: 0.4, // lince curve (0-1)
                borderWidth: 1,
                yAxisID: "y",
                xAxisID: "x",
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,

            radius: 0, // point size
            // hitRadius: 24, // point distance of hover
            // hoverRadius: 12, // point size on hover
            responsive: true,

            plugins: {
              legend: {
                display: true, // hides legend
                position: "bottom",
              },
              title: {
                display: true,
                text: "Stock Market Prices",
                font: {
                  size: "32",
                },
              },
            },
            animation: {
              onComplete: () => {
                delayed = true;
              },
              delay: (context) => {
                let delay = 0;
                if (
                  context.type === "data" &&
                  context.mode === "default" &&
                  !delayed
                ) {
                  delay = context.dataIndex * 2; // + context.dataIndex * 300
                }
                return delay;
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default StockPrices;
