export function truncateString(str, maxLength) {
  return str.substring(0, Math.min(str.length, maxLength)) + "...";
};

export function toProperCase(str) {
  let result = [];
  let words = str.split(" ");
  result = words.map(word => word[0].toUpperCase() + (word.slice(1)).toLowerCase());
  return result.join(" ");
}