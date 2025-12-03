function longestCommonPrefix(words) {
	const short = words.reduce((a, b) => (a.length <= b.length ? a : b));
	let prefix = 0;

	for (let i = 0; i < short.length; i++) {
		for (let j = 0; j < words.length; j++) {
			if (short[i] != words[j][i]) {
				return short.slice(0, prefix);
			}
		}
		prefix = i + 1;
	}

	return short;
}

console.log(longestCommonPrefix(['flower', 'flow']));
