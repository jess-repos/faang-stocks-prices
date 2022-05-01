import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import classes from "./Chart.module.css";

const Today = ({ data }) => {
  let delayed;

  const labels = data.date.map((item) => {
    const tempDate = new Date(item);
    return tempDate.getHours() + ":00";
  });

  return (
    <>
      <div className={classes.line}>
        <Chart
          type="line"
          data={{
            labels: labels,
            datasets: [
              {
                data: data.open,
                label: "Open",
                fill: true,
                // backgroundColor: "rgba(235, 64, 52, 0.3)", // graph background
                borderColor: "#b0b0b0", // line color
                pointBackgroundColor: "#b0b0b0", // point color
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
                borderColor: "#48c6f0", // line color
                pointBackgroundColor: "#48c6f0", // point color
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
                borderColor: "#fc7e2b", // line color
                pointBackgroundColor: "#fc7e2b", // point color
                // tension: 0.4, // lince curve (0-1)
                borderWidth: 1,
                yAxisID: "y",
                xAxisID: "x",
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,

            radius: 2, // point size
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
                text: "Today",
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
    </>
  );
};

export default Today;
