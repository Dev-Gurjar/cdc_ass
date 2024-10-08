import React from "react";
import { Chart, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import dummyData from "../data/dummyData";

// Register the required components
Chart.register(LineElement, PointElement, LinearScale, CategoryScale);

function SectorChart() {
  const sectors = dummyData.reduce((acc, company) => {
    acc[company.sector] = (acc[company.sector] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(sectors),
    datasets: [
      {
        label: "Companies per Sector",
        data: Object.values(sectors),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div>
      <h2>Companies by Sector</h2>
      <Line data={data} />
    </div>
  );
}

export default SectorChart;
