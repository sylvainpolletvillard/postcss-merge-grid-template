const encode = require('./encode');

const holeRegex = /^\.+$/g;


function getIdentifiers(input = '') {
	let match = input.match(/"[^"]*"/g);
	if (!match) return null;

	return match
		.map(row => row.slice(1, -1)) // remove quotes
		.map(row => row.split(/\s+/)) // split by whitespace
		.reduce((accu, ids) => accu.concat(ids), []) // flatten array
		.filter((id) => !holeRegex.test(id)) // remove holes
		.filter((item, index, array) => array.indexOf(item) === index); // remove duplicates
}


function renameIdentifiers(identifiers, map) {
	for (let id of identifiers) {
		if (!map.has(id)) {
			map.set(id, encode(map.size));
		}
	}
	return map;
}


function replaceIdentifiers(input, identifiers, map) {
	let output = input.replace(/\.{2,}/g, '.'); // reduce holes to a single dot identifier
	for (let id of identifiers) {
		let idRegex = new RegExp('\\b' + id + '\\b', 'g');
		output = output.replace(idRegex, map.get(id));
	}
	output = output.match(/"[^"]*"/g).join(' '); // join rows with a single whitespace
	output = output.replace(/\s{2,}/g, ' '); // merge whitespaces
	return output;
}


module.exports = { getIdentifiers, renameIdentifiers, replaceIdentifiers };
