import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

function Analytics() {
  const [probability, setProbability] = useState([100]);

  // 📉 Simulated Probability Decay
  useEffect(() => {
    const interval = setInterval(() => {
      setProbability(prev => [
        ...prev,
        Math.max(prev[prev.length - 1] - 4, 0)
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: probability.map((_, index) => index),
    datasets: [
      {
        label: "Recovery Probability (%)",
        data: probability,
        borderColor: "#7c3aed",
        backgroundColor: "rgba(124, 58, 237, 0.2)",
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: 100
      }
    }
  };

  return (
    <div className="flex-1 bg-gray-100 min-h-screen p-8">
      <h2 className="text-2xl font-semibold mb-6">
        Recovery Probability Analysis
      </h2>

      <div className="bg-white p-6 rounded-xl shadow">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default Analytics;
