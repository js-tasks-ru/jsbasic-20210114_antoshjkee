/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */


function getMinMax(str) {
  let array = str.split(/[ ,]+/);
  let arrayWithoutSymbols = array.filter(item => !isNaN(item));
  arrayWithoutSymbols = arrayWithoutSymbols.map(Number);
  maxValue = Math.max.apply(null, arrayWithoutSymbols);
  minValue = Math.min.apply(null, arrayWithoutSymbols);
  return { min: minValue, max: maxValue };
};