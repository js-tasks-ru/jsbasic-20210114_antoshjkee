/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if (!str) {
    return str;
  } else {
    str = str.split("");
    str.splice(0, 1, str[0].toUpperCase());
    return str.join("");
  }
}
