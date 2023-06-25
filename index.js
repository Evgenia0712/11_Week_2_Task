
const еlement = document.getElementById('input');
const list = document.getElementById('List');

function colorMe() {
  document.getElementById('input').style.backgroundColor = 'rgb(246, 211, 246)';
}

function colorMeBack() {
  document.getElementById('input').style.backgroundColor = 'white';
}

function addTask() {
  const List = document.getElementById('List'); //Нашли элемент в который будем добавлять
  const newElement = document.createElement('li'); //Создаем новый элемент
  newElement.textContent = еlement.value; //Добавляем в новый элемент значение из input
  List.append(newElement); //Добавьте в список новый элемент
  input.value = ""; // Очищает input после нажатия кнопки
}

document.getElementById('input').onmouseover = colorMe;
document.getElementById('input').onmouseout = colorMeBack;
document.getElementById('button').onclick = addTask;


function taskDone(evt) {
  return evt.target.classList.toggle('done');
}

if (!!list) {
  list.addEventListener('click', function (evt) {
    taskDone(evt);
  });
}

