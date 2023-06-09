

let form = document.querySelector("form");
let itemsList = document.querySelector('ul');
let search = document.querySelector('.search');


//! Добавление новой задачи
form.addEventListener("submit", addItem);

function addItem(event) {
//! обнуляем submit
  event.preventDefault();
//! получаем текст из Input
  let newItemInput = document.querySelector('.form__add');
  let form__add = newItemInput.value;
  if (form__add == '') {
    alert('Напишите что-нибудь в полле ввода задачи');
    return
  };
//! создаем новый элемент
  let newElement =  document.createElement('li');
  newElement.className = 'item';
  let newTextNode = document.createTextNode(form__add);
  newElement.appendChild(newTextNode);

// //! создаем кнопку
  let deleteBtn = document.createElement('button');
  deleteBtn.className = 'item__btn';
  deleteBtn.dataset.action = 'delete';
  console.log(deleteBtn);
  
// //! помещаем кнопку внутрь li
  newElement.appendChild(deleteBtn)

// //! добавляем новую задачу к остальным задачам
  itemsList.prepend(newElement);

// //! очищаем инпут от текста задачи
  newItemInput.value = '';
}

// Удаление задачи
itemsList.addEventListener('click', removeItem)

function removeItem(event) {
    if (event.target.hasAttribute('data-action') && 
    event.target.getAttribute('data-action') === 'delete') 
    if (confirm('Вы точно хотите удалить данную задачу?')) {
        event.target.parentNode.remove();
    }
}

// Поиск
search.addEventListener('keyup', searchItems)
function searchItems(event) {
    let searchedText = event.target.value.toLowerCase();

    let items = itemsList.querySelectorAll('li');
    items.forEach(function (item) {
        let itemText = item.firstChild.textContent.toLowerCase();
        if (itemText.indexOf(searchedText) != -1) {
            item.style.display = 'flex';
        }
        else {
            item.style.display = 'none';
        }
    })

}

