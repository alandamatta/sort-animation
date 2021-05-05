async function partition(start, end) {
	let pivot = array[end];
	let i = start - 1;
	for (let j = start; j <= end-1; j++) {
		if (array[j] <= pivot) {
			i++;
			await swap(array, i, j);
		}
	}
	await swap(array, i+1, end);
	return i+1;
}

async function quickSort(start, end) {
	if (start < end) {
		let pivotIndex = await partition(start, end);
		await quickSort(start, pivotIndex-1);
		await quickSort(pivotIndex+1, end);
	}
}
