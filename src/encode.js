module.exports = function encode(slotNumber) {
	let base = 52;
	let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let character = slotNumber % base;
	let result = characters[character];
	let remainder = Math.floor(slotNumber / base);
	if (remainder) {
		base = 64;
		characters += '0123456789-_';
		while (remainder) {
			character = remainder % base;
			remainder = Math.floor(remainder / base);
			result += characters[character];
		}
	}
	return result;
};
