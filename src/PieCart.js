import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
function PieCart({ chartdata }) {
  return <Pie data={chartdata} />;
}

export default PieCart;
