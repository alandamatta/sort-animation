async function bubbleSortFn(array, i, j) {
	if (array[i] > array[i+1]) {
		await swap(array, i, i+1);
	}
	i++;
	if (i === array.length) {
		i = 0;
		j++;
	}
	if (j === array.length) {
		return array;
	}
	return bubbleSortFn(array, i, j);
}
