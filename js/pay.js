// Файл для работы с либой Chart.js
// Тут будет конструироваться диаграмма зарплат

const ctx = document.querySelector('#pay-chart').getContext('2d');
const payChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['JUNIOR\n(<3 лет)', 'MIDDLE\n(3-5 лет)', 'SENIOR\n(>5 лет)'],
		datasets: [{
    		label: 'Зарплаты',
    		data: [40, 70, 100],
	    	backgroundColor: [
	      	'white',
	      	'rgba(255, 255, 255, 0.9)',
	      	'rgba(255, 255, 255, 0.8)'
    		]
    	}]
	}
});