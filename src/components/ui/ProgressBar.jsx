function ProgressBar({ value }) {
  const getColor = () => {
    if (value >= 80) return "bg-red-500";
    if (value >= 50) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
      <div
        className={`h-3 ${getColor()} transition-all duration-500`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export default ProgressBar;
