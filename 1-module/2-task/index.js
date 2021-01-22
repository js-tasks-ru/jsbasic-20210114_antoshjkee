/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
* Эту функцию нужно поменять так,
* чтобы функция sayHello работала корректно
* @param {string | null} name
* @returns {boolean}
*/
function isValid(name) {
  if (!name || 0 === name.length || name.length < 4 || name.includes(' ')) {
    return false;
  }
  else {
    return true;
  }
}


/**
* Эту функцию трогать не нужно
*/
function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    alert(`Welcome back, ${userName}!`);
  } else {
    alert('Некорректное имя');
  }
}

sayHello();