function inRange(word, start, end) {
	for (let i = 0; i < word.length; i++) {
		if (
			!(start.charCodeAt(0) <= word[i].charCodeAt(0) && word[i].charCodeAt(0) <= end.charCodeAt(0))
		) {
			return false;
		}
	}

	return true;
}

function isUpper(word) {
	return inRange(word, 'A', 'Z');
}

function isLower(word) {
	return inRange(word, 'a', 'z');
}

function detectCapitalUse(word) {
	if (isUpper(word) || isLower(word)) {
		return true;
	}

	return isUpper(word.slice(0, 1)) && isLower(word.slice(1));
}

console.log(detectCapitalUse('Salom'));
