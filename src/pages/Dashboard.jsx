import { useState, useEffect } from "react";
import casesData from "../data/cases";
import CaseSelector from "../components/dashboard/CaseSelector";
import CaseSummary from "../components/dashboard/CaseSummary";
import StrategyPanel from "../components/dashboard/StrategyPanel";
import ActivityLog from "../components/dashboard/ActivityLog";
import Topbar from "../components/layout/Topbar";
import AgentPipeline from "../components/dashboard/AgentPipeline";

function Dashboard() {
  const GOLDEN_LIMIT = 15 * 60;

  const [activeCase, setActiveCase] = useState(casesData[0]);
  const [timeLeft, setTimeLeft] = useState(GOLDEN_LIMIT);
  const [expired, setExpired] = useState(false);
  const [logs, setLogs] = useState([]);
  const [step, setStep] = useState(0);

  // 🔁 Golden Hour
  useEffect(() => {
    if (!activeCase?.transactionTime) return;

    const transactionTimestamp = new Date(
      activeCase.transactionTime
    ).getTime();

    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = Math.floor((now - transactionTimestamp) / 1000);
      const remaining = GOLDEN_LIMIT - elapsed;

      setTimeLeft(remaining > 0 ? remaining : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, [activeCase]);

  // 🚨 Expiry detection
  useEffect(() => {
    setExpired(timeLeft === 0);
  }, [timeLeft]);

  // 📜 Logs + Step Progress
  useEffect(() => {
    setLogs([]);
    setStep(0);

    const events = [
      "Risk Detected",
      "AI Strategy Generated",
      "Freeze Packet Prepared",
      "Complaint Drafted"
    ];

    events.forEach((event, index) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, event]);
        setStep(index + 1);
      }, index * 1500);
    });
  }, [activeCase]);

  const handleEscalate = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLogs((prev) => [...prev, "🚨 Escalation Sent to Bank"]);
    setStep(5);
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-100 min-h-screen">

      <Topbar timeLeft={timeLeft} riskScore={activeCase.riskScore} />

      {expired && (
        <div className="fixed top-20 right-6 bg-red-600 text-white px-4 py-3 rounded-lg shadow-lg z-50">
          ⚠ Golden Hour Expired – Escalate Case Immediately
        </div>
      )}

      <div className="p-8">

        <CaseSelector
          cases={casesData}
          activeCase={activeCase}
          setActiveCase={setActiveCase}
        />

        <div
          key={activeCase.id}
          className="grid md:grid-cols-2 gap-6 transition-all duration-500 ease-in-out"
        >
          <CaseSummary caseData={activeCase} />
          <StrategyPanel />
        </div>

        {/* Escalation Button */}
        <div className="mt-6">
          <button
            onClick={handleEscalate}
            className="bg-red-600 text-white px-6 py-3 rounded-lg shadow hover:bg-red-700 transition"
          >
            Escalate Case
          </button>
        </div>

        {/* Agent Pipeline */}
        <AgentPipeline step={step} />

        {/* Activity Log */}
        <div className="mt-6">
          <ActivityLog events={logs} />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
