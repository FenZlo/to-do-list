const elementButton = document.getElementById('botton');
let elementAddString = document.getElementsById('addInput');
let toDoList = document.getElementsByClassName('list')[0];

elementButton.addEventListener('click', clickHandler); //добавляю событие на клик по кнопке
function clickHandler (event) {
    let newElement = document.createElement('div'); //создаю новый элемент, чтобы добавить его в список
    div.className = 'newElements'; //присваиваю класс новому элементу, чтобы изменять его свойства в CSS
    let elementAddString = document.getElementsById('addInput').value; //присваиваю новой переменной значение, которое ввел в поле ввода
    newElement.appendChild(elementAddString); //добавляю значение из поля ввода в div, который создал ранее
    toDoList.appendChild(newElemetnt); //Перемещаю div в список дел, который создал заранее в HTML и объявил его в начале JS
    if (elementAddString.lenth<0) return; //Проверка на то, что поле ввода не пустое
}