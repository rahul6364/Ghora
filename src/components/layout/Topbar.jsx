function Topbar({ timeLeft, riskScore }) {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  let colorClass = "text-green-600";

  if (riskScore > 80) colorClass = "text-red-600";
  else if (riskScore > 50) colorClass = "text-yellow-600";

  const urgent = timeLeft < 300;

  return (
    <header className="bg-white h-16 px-8 flex items-center justify-between shadow-sm border-b border-gray-200">
      <div>
        <h1 className="text-xl font-semibold text-gray-800">
          Fraud Operations Center
        </h1>
        <p className="text-sm text-gray-500">
          Real-time Fraud Monitoring & Recovery
        </p>
      </div>

      <div className="flex items-center gap-6">
        {/* Golden Hour */}
        <div
          className={`px-4 py-2 rounded-lg border ${
            urgent
              ? "bg-red-100 border-red-400 animate-pulse"
              : "bg-gray-100 border-gray-300"
          }`}
        >
          <p className="text-xs font-medium">Golden Hour</p>
          <p className={`font-semibold ${colorClass}`}>
            {minutes}:{seconds.toString().padStart(2, "0")}
          </p>
        </div>

        {/* Admin */}
        <div className="flex items-center gap-2">
          <span className="text-gray-700">Admin</span>
          <div className="w-8 h-8 bg-purple-600 text-white flex items-center justify-center rounded-full">
            A
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
