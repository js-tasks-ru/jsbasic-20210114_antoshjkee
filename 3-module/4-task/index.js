/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */

function showSalary(users, maxAge) {
   let result = users.filter(function (user) {
      return user.age <= maxAge;
   });
   result = result.map(function (user) {
      return `${user.name}, ${user.balance}`;
   });
   result = result.join('\n');
   return result;
}
