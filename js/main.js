// Находим элементы на странице
const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksList');
const emptyList = document.querySelector('#emptyList');

form.addEventListener('submit', function(event) {
	// Отменяем отправку формы
	event.preventDefault();

	// Достаем текст задачи из поля ввода
	const taskText = taskInput.value;

	// Формируем разметку для новой задачи
	const taskHTML = `
		<li class="list-group-item d-flex justify-content-between task-item">
			<span class="task-title">${taskText}</span>
			<div class="task-item__buttons">
				<button type="button" data-action="done" class="btn-action">
					<img src="./img/tick.svg" alt="Done" width="18" height="18">
				</button>
				<button type="button" data-action="delete" class="btn-action">
					<img src="./img/cross.svg" alt="Done" width="18" height="18">
				</button>
			</div>
		</li>
	`;

	// Добавляем задачу на страницу
	tasksList.insertAdjacentHTML('beforeend', taskHTML);

	// Очищаем поле ввода и возвращаем на него фокус
	taskInput.value = "";
	taskInput.focus();

	// Проверка.Если в списке задач более 1 - го элемента, скрываем блок "Список дел пуст"
	if(tasksList.children.length > 1) {
		emptyList.classList.add('none');
	}
});

// Функции

	// Описываем задачу в виде объекта
	
	// Добавляем задачу в массив с задачами

	// Сохраняем список задач в хранилище браузера localStorage

	// Рендерим задачу на странице

	// Очищаем поле ввода и возвращаем на него фокус

	// Проверяем если клик был НЕ по кнопке "удалить задачу"

	// Определяем ID задачи

	// Удаляем задча через фильтрацию массива

	// Сохраняем список задач в хранилище браузера localStorage

	// Удаляем задачу из разметки

	// Проверяем что клик был НЕ по кнопке "задача выполнена"

	// Определяем ID задачи

	// Сохраняем список задач в хранилище браузера localStorage

	// Формируем CSS класс

	// Формируем разметку для новой задачи

	// Добавляем задачу на страницу