/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */

function isEmpty(schedule) {
  if (Object.keys(schedule).length == 0) {
    return true;
  } else {
    return false;
  }
};
