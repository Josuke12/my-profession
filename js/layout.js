// Получает все элементы таймлайна и даёт класс чётным

const timelineElements = document.querySelectorAll('#timeline > li');

timelineElements.forEach((elem, index) => {
	if((index + 1) % 2 == 0) {
		elem.classList.add('even');
	}
});