/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  if (str.toUpperCase().includes("1XBET") || str.toUpperCase().includes("XXX")) {
    return true;
  } else {
    return false;
  }
}
