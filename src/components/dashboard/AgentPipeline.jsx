function AgentPipeline({ step }) {
  const steps = [
    "Risk Analysis",
    "Strategy Planning",
    "Freeze Packet",
    "Complaint Draft",
    "Escalation"
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h3 className="text-lg font-semibold mb-4">
        AI Agent Pipeline
      </h3>

      <div className="flex justify-between">
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
    </div>
  );
}

export default AgentPipeline;
