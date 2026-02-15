function CaseSummary({ selectedCase, riskScore }) {
  if (!selectedCase) return null;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Case Summary
      </h3>

      <p><strong>Rail:</strong> {selectedCase.rail}</p>
      <p><strong>Amount:</strong> ₹{selectedCase.amount}</p>
      <p><strong>Beneficiary:</strong> {selectedCase.beneficiary}</p>

      <div className="mt-4">
        <p className="font-semibold">
          Risk Score: {riskScore}/100
        </p>

        <div className="w-full bg-gray-200 h-3 rounded-full mt-2">
          <div
            className="h-3 bg-red-500 rounded-full transition-all duration-500"
            style={{ width: `${riskScore}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default CaseSummary;
