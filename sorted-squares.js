function reverse(arr) {
	let i = 0;
	let j = arr.length - 1;

	while (i < j) {
		[arr[i], arr[j]] = [arr[j], arr[i]];
		i++;
		j--;
	}

	return arr;
}

function sortedSquares(nums) {
	let i = 0;
	let j = nums.length - 1;
	let result = [];

	while (i <= j) {
		if (Math.abs(nums[i]) < Math.abs(nums[j])) {
			result.push(nums[j] ** 2);
			j--;
		} else {
			result.push(nums[i] ** 2);
			i++;
		}
	}

	console.log(reverse(result));

	return reverse(result);
}

sortedSquares([-4, -1, 0, 3, 10]);
