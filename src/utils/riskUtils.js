import { useEffect, useState } from "react";

function RiskBar({ score }) {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(score);
    }, 200);
    return () => clearTimeout(timer);
  }, [score]);

  return (
    <div className="mt-4">
      <p className="font-semibold mb-2">Risk Score: {score}/100</p>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-red-500 h-3 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${animatedScore}%` }}
        />
      </div>
    </div>
  );
}

export default RiskBar;
