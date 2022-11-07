const elementButton = document.querySelector('button');
let elementAddString = document.getElementById('addInput');
let toDoList = document.getElementsByClassName('list')[0];

elementButton.addEventListener('click', clickHandler); //добавляю событие на клик по кнопке
function clickHandler (event) {
    let newElement = document.createElement('div'); //создаю новый элемент, чтобы добавить его в список
    newElement.classList.add('newElements'); //присваиваю класс новому элементу, чтобы изменять его свойства в CSS
    
    let textOfBusiness = document.createElement('div')
    
    let elementAddString = document.getElementById('addInput').value; //присваиваю новой переменной значение, которое ввел в поле ввода
    if (elementAddString.length<1) return; //Проверка на то, что поле ввода не пустое
        
    textOfBusiness.append(elementAddString); //добавляю значение из поля ввода в newElement, который создал ранее
    newElement.appendChild(textOfBusiness);
    console.log(newElement);
    
    let trash = document.createElement('img')
    trash.src = './to-do-list/trash.png'
    newElement.appendChild(trash);
    
    toDoList.appendChild(newElement); //Перемещаю div в список дел, который создал заранее в HTML и объявил его в начале JS
    
}