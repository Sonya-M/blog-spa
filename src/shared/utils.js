export function truncateString(str, maxLength) {
  return str.substring(0, Math.min(str.length, maxLength)) + "...";
};
