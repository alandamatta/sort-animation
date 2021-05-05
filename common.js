async function swap(array, a, b) {
	const temp = array[a];
	array[a] = array[b];
	update();
	await delay(100);
	array[b] = temp;
	update();
}
