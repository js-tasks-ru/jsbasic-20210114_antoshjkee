/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  str = str.split('');
  for (let key in str) {
    if (str[key] == "-") {
      str.splice(key, 1);
      str[key] = (str[key].toUpperCase());
    }
  }
  return str.join('');

}
