import cases from "../data/cases";
import { logsData } from "../data/logs";
import { advisoryList } from "../data/advisory";

/* Simulate network delay */
const delay = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/* ===========================
   CASES API
=========================== */

export const getCases = async () => {
  await delay(800);
  return cases;
};

export const getCaseById = async (id) => {
  await delay(500);
  return cases.find((c) => c.id === id);
};

export const freezeCase = async (id) => {
  await delay(1000);

  return {
    success: true,
    message: `Case ${id} frozen successfully`,
    newRiskScore: 25
  };
};

/* ===========================
   LOGS API
=========================== */

export const getLogs = async () => {
  await delay(600);
  return logsData;
};

/* ===========================
   ADVISORY API
=========================== */

export const getAdvisory = async () => {
  await delay(500);
  return advisoryList;
};
