function CaseSelector({ cases = [], activeCase, setActiveCase }) {
  if (!cases.length) return null;

  return (
    <div className="flex gap-4 mb-6">
      {cases.map((c) => (
        <div
          key={c.id}
          onClick={() => setActiveCase(c)}
          className={`cursor-pointer p-4 rounded-xl shadow-md transition-all duration-300 ${
            activeCase?.id === c.id
              ? "border-2 border-purple-500 scale-105 bg-purple-50"
              : "bg-white hover:scale-105"
          }`}
        >
          <h4 className="font-semibold">{c.id}</h4>
          <p className="text-sm">₹{c.amount}</p>
        </div>
      ))}
    </div>
  );
}

export default CaseSelector;
