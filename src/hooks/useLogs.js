import { useState, useEffect } from "react";
import { logsData } from "../data/logs";

function useLogs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < logsData.length) {
        setLogs(prev => [...prev, logsData[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return logs;
}

export default useLogs;
