function productExceptSelf(nums) {
	let prefix = [];
	let suffix = [];
	let productPrefix = 1;
	let productSuffix = 1;
	let result = [];

	// build prefix products
	for (let i = 0; i < nums.length; i++) {
		productPrefix *= nums[i];
		prefix[i] = productPrefix;
	}

	// build suffix products (no reversal)
	for (let i = nums.length - 1; i >= 0; i--) {
		productSuffix *= nums[i];
		suffix[i] = productSuffix;
	}

	// build result
	for (let i = 0; i < nums.length; i++) {
		let left = i > 0 ? prefix[i - 1] : 1;
		let right = i < nums.length - 1 ? suffix[i + 1] : 1;
		result[i] = left * right;
	}

	return result;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
