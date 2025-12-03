function reverseString(s) {
	let result = [];

	for (i = s.length - 1; i >= 0; i--) {
		result.push(s[i]);
	}
	// pass

	return result;
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
