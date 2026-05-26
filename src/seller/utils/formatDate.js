// src/seller/utils/formatDate.js

/* ==========================================
   FORMAT DATE (DD MMM YYYY)
========================================== */

export const formatDate = (
  date
) => {
  if (!date) return "N/A";

  const d = new Date(date);

  if (isNaN(d.getTime())) {
    return "Invalid Date";
  }

  return d.toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );
};

/* ==========================================
   FORMAT DATE WITH TIME
========================================== */

export const formatDateTime = (
  date
) => {
  if (!date) return "N/A";

  const d = new Date(date);

  if (isNaN(d.getTime())) {
    return "Invalid Date";
  }

  return d.toLocaleString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }
  );
};

/* ==========================================
   GET RELATIVE TIME (e.g. "2 days ago")
========================================== */

export const getRelativeTime = (
  date
) => {
  if (!date) return "N/A";

  const now = new Date();
  const past = new Date(date);

  if (isNaN(past.getTime())) {
    return "Invalid Date";
  }

  const diff =
    now - past;

  const seconds =
    Math.floor(diff / 1000);

  const minutes =
    Math.floor(seconds / 60);

  const hours =
    Math.floor(minutes / 60);

  const days =
    Math.floor(hours / 24);

  if (seconds < 60) {
    return "Just now";
  }

  if (minutes < 60) {
    return `${minutes} min ago`;
  }

  if (hours < 24) {
    return `${hours} hr ago`;
  }

  if (days < 7) {
    return `${days} day(s) ago`;
  }

  return formatDate(date);
};

/* ==========================================
   FORMAT FOR INPUT (YYYY-MM-DD)
========================================== */

export const formatDateForInput = (
  date
) => {
  if (!date) return "";

  const d = new Date(date);

  if (isNaN(d.getTime())) {
    return "";
  }

  return d
    .toISOString()
    .split("T")[0];
};