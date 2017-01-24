module.exports = function encode(slotNumber) {
	var base = 52;
	var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var character = slotNumber % base;
	var result = characters[character];
	var remainder = Math.floor(slotNumber / base);
	if (remainder) {
		base = 64;
		characters = characters + '0123456789-_';
		while (remainder) {
			character = remainder % base;
			remainder = Math.floor(remainder / base);
			result = result + characters[character];
		}
	}
	return result;
};