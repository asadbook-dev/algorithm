function maxArea(nums) {
	let i = 0;
	let j = nums.length - 1;
	let maxArea = 0;

	while (i < j) {
		let area = (j - i) * (nums[i] > nums[j] ? nums[j] : nums[i]);
		maxArea = area > maxArea ? area : maxArea;

		if (nums[i] < nums[j]) i++;
		else j--;
	}

	console.log(maxArea);
	return maxArea;
}

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
