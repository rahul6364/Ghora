import { useState, useEffect } from "react";
import { getCases, freezeCase } from "../services/api";

function useCases() {
  const [cases, setCases] = useState([]);
  const [selectedCase, setSelectedCase] = useState(null);
  const [riskScore, setRiskScore] = useState(0);
  const [resolved, setResolved] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCases = async () => {
      const data = await getCases();
      setCases(data);
      setSelectedCase(data[0]);
      setRiskScore(data[0].riskScore);
      setLoading(false);
    };

    fetchCases();
  }, []);

  const switchCase = (newCase) => {
    setSelectedCase(newCase);
    setRiskScore(newCase.riskScore);
    setResolved(false);
  };

  const resolveCase = async () => {
    if (!selectedCase) return;

    const response = await freezeCase(selectedCase.id);

    if (response.success) {
      setResolved(true);
      setRiskScore(response.newRiskScore);
    }
  };

  return {
    cases,
    selectedCase,
    riskScore,
    resolved,
    loading,
    switchCase,
    resolveCase,
  };
}

export default useCases;
