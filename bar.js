class Bar {
	constructor() {
	}

	generate(array = []) {
		let greatest = 0;
		for (let n of array) {
			greatest = n > greatest ? n : greatest;
		}
		let unitySize = 1;
		let width = 50;
		let y = 2;
		let x = 3;
		for (let i = 0; i <= array.length; i++) {
			fill(51);
			rect(x, y, width, unitySize * array[i]);
			text(array[i], x + 13, unitySize * array[i] + 20);
			x += width + 5;
		}
	}

}
