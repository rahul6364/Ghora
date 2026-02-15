import { useState, useEffect } from "react";

function useCountdown(initialSeconds) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return { minutes, seconds, timeLeft };
}

export default useCountdown;
