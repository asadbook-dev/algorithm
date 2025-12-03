function is_valid(s) {
	const OPEN = '(';
	const CLOSE = ')';
	let balance = 0;

	for (const bracket of s) {
		if (bracket === OPEN) {
			balance++;
		} else if (bracket === CLOSE) {
			balance--;
		}
		if (balance < 0) {
			return false;
		}
	}

	return balance == 0;
}

console.log(is_valid('))'));
