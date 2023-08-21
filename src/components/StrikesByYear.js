import React from "react";
import { Bar } from "react-chartjs-2";
import { useMeteorDataContext } from "../store/meteor-context";
import { Chart } from "chart.js/auto";

function StrikesByYear() {
  const meteorData = useMeteorDataContext();

  if (meteorData === 0) return;

  const strikesByYear = {};

  meteorData.forEach((meteor) => {
    const year = new Date(meteor.year).getFullYear();

    if (!strikesByYear[year]) {
      strikesByYear[year] = 0;
    }

    strikesByYear[year]++;
  });

  const years = Object.keys(strikesByYear);
  const strikesCount = years.map((year) => strikesByYear[year]);

  const chartData = {
    labels: years,
    datasets: [
      {
        label: "Number of Strikes by Year",
        data: strikesCount,
        backgroundColor: "rgb(1, 244, 255)",
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
        title: {
          display: true,
          text: "Number of Strikes",
          color: "white",
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "wheat",
          font: {
            size: 16, // Set the font size of the legend label text to 18
          },
        },
      },
    },
  };

  return (
    <div
      style={{
        width: 700,
        color: "white",
        marginTop: 50,
        background: "rgb(12, 22, 79)",
        border: "5px solid white",
        borderRadius: "3px",
      }}
    >
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}

export default StrikesByYear;
