function Button({ children, variant = "primary", onClick, className }) {
  const base =
    "px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none";

  const styles = {
    primary: "bg-purple-600 text-white hover:bg-purple-700",
    danger: "bg-red-500 text-white hover:bg-red-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    outline:
      "border border-purple-500 text-purple-600 hover:bg-purple-50"
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
