export const capitaliseFirstLetter = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase().concat("", string.slice(1));
};
