function Badge({ type = "primary", children }) {
  const styles = {
    primary: "bg-purple-100 text-purple-600",
    success: "bg-green-100 text-green-600",
    danger: "bg-red-100 text-red-600",
    warning: "bg-yellow-100 text-yellow-600"
  };

  return (
    <span
      className={`px-3 py-1 text-xs rounded-full font-semibold ${styles[type]}`}
    >
      {children}
    </span>
  );
}

export default Badge;
