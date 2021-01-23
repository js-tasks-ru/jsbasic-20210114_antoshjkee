/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    str = str.slice(0, maxlength - str.length - 1) + "…";
    return str;
  } else {
    return str;
  }
}
