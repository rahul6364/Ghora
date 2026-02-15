/* ============================
   Risk Color Logic
============================ */

export const getRiskColorClass = (score) => {
  if (score >= 80) return "bg-red-500";
  if (score >= 50) return "bg-yellow-500";
  return "bg-green-500";
};

export const getRiskBadgeType = (score) => {
  if (score >= 80) return "danger";
  if (score >= 50) return "warning";
  return "success";
};

/* ============================
   Status Color Logic
============================ */

export const getStatusColor = (resolved) => {
  return resolved ? "success" : "primary";
};
