


import { useState, useEffect } from "react";

function Orchestration() {
  const steps = [
    "Risk Analysis",
    "Strategy Planning",
    "Freeze Packet",
    "Complaint Draft",
    "Escalation"
  ];

  const [step, setStep] = useState(0);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => (prev < steps.length ? prev + 1 : prev));
    }, 2000);

    const events = [
      "Risk Detected",
      "AI Strategy Generated",
      "Freeze Packet Prepared",
      "Complaint Drafted",
      "Awaiting Confirmation"
    ];

    events.forEach((event, index) => {
      setTimeout(() => {
        setLogs(prev => [...prev, event]);
      }, index * 2000);
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">
        AI Orchestration
      </h2>

      {/* Pipeline */}
      <div className="flex justify-between mb-8">
        {steps.map((label, index) => (
          <div key={index} className="text-center flex-1">
            <div
              className={`w-10 h-10 mx-auto rounded-full ${
                index < step
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            ></div>
            <p className="text-sm mt-2">{label}</p>
          </div>
        ))}
      </div>

      {/* Logs */}
      <div className="bg-black text-green-400 font-mono p-4 rounded-xl h-56 overflow-y-auto">
        {logs.map((log, index) => (
          <p key={index}>▶ {log}</p>
        ))}
      </div>
    </div>
  );
}

export default Orchestration;
