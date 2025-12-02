function sign(num) {
	if (num > 0) {
		return 1;
	} else if (num < 0) {
		return -1;
	} else {
		return 0;
	}
}

function leftRightDifference(nums) {
	let leftSum = 0;
	let rightSum = nums.reduce((total, num) => total + num, 0);
	let result = [];

	for (let i = 0; i < nums.length; i++) {
		const element = nums[i];
	}
	for (const num of nums) {
		rightSum -= num;
		result.push(sign(rightSum - leftSum));
		leftSum += num;
	}

	console.log(result);
	return result;
}

leftRightDifference([1, 2, 3, 4]);
