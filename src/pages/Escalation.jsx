import { useState } from "react";

function Escalation() {
  const [status, setStatus] = useState("No escalation triggered");

  const handleEscalate = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus("Escalation Sent to Bank Liaison Agent");
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">
        Escalation Console
      </h2>

      <button
        onClick={handleEscalate}
        className="bg-red-600 text-white px-6 py-3 rounded-lg shadow"
      >
        Escalate Case
      </button>

      <p className="mt-4 text-lg">{status}</p>
    </div>
  );
}

export default Escalation;
