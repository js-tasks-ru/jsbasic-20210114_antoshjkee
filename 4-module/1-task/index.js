/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */


function makeFriendsList(friends) {
  let ul = document.createElement("ul");
  for (let elem in friends) {
    let li = document.createElement('li');

    li.innerHTML = `${friends[elem].firstName} ${friends[elem].lastName}`;
    ul.appendChild(li)
  }
  return document.body.appendChild(ul);
}
