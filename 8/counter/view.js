export default class View {
	constructor(value) {
		this.input = document.getElementById('input');
		this.updateCounter(value);
	}

	elements = {
		btnMinus: document.getElementById('btnMinus'),
		btnReset: document.getElementById('btnReset'),
		btnPlus: document.getElementById('btnPlus'),
	};

	updateCounter(data) {
		this.input.value = data;
	}
}

