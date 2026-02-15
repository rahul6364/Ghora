function MetricsPanel({ riskScore, resolved }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Live Metrics
      </h3>

      <div className="space-y-3 text-sm">
        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="text-gray-500">Risk Score</p>
          <p className="font-semibold text-purple-600">
            {riskScore}/100
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-gray-500">Status</p>
          <p className="font-semibold text-green-600">
            {resolved ? "Funds Secured" : "Under Investigation"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MetricsPanel;
