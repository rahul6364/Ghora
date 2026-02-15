import { useState } from "react";

function StrategyPanel() {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleFreeze = () => {
    setLoading(true);
    setCompleted(false);

    setTimeout(() => {
      setLoading(false);
      setCompleted(true);
    }, 2500);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-4">AI Strategy Plan</h3>

      <ol className="list-decimal ml-5 space-y-1 text-sm">
        <li>Freeze Bank Account</li>
        <li>File Cyber Complaint</li>
        <li>Generate Evidence Packet</li>
      </ol>

      <button
        onClick={handleFreeze}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Freeze Bank Account
      </button>

      {loading && (
        <p className="mt-4 text-blue-500 animate-pulse">
          🤖 AI Agent Processing...
        </p>
      )}

      {completed && (
        <p className="mt-4 text-green-600 font-semibold">
          ✅ Account Freeze Request Sent
        </p>
      )}
    </div>
  );
}

export default StrategyPanel;
