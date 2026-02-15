import useCountdown from "../../hooks/useCountdown";

function Header({ resolved }) {
  const { minutes, seconds } = useCountdown(900);

  return (
    <div className="bg-white h-16 px-8 flex items-center justify-between shadow-sm">
      <h1 className="text-lg font-semibold text-gray-800">
        Fraud Operations Center
      </h1>

      <div className="text-right">
        <p className="text-sm text-gray-500">
          {resolved ? "Resolved" : "In Progress"}
        </p>
        <p className="text-purple-600 font-semibold">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
      </div>
    </div>
  );
}

export default Header;
