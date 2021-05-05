let array =[];

function setup() {
	let myCanvas = createCanvas(window.innerWidth, window.innerHeight - 200);
	myCanvas.parent('canvasDiv');
	let quantity =( window.innerWidth / 55) - 13;
	for (let i = 0; i < quantity; i++) {
		array.push(Math.round(random(innerHeight - 400)));
	}
	noLoop();
}

function draw() {
	let bar = new Bar();
	bar.generate(array);
}

function update() {
	clear();
	draw();
}

function delay(ms = 30) {
	return new Promise(resolve => {
		let wait = setTimeout(() => {
			clearTimeout(wait);
			resolve('resolved');
		}, ms);
	});
}
