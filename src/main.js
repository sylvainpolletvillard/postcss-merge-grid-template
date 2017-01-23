const {getIdentifiers, renameIdentifiers, replaceIdentifiers} = require("./identifiers");

const DEFAULTS_OPTIONS = {}

module.exports = function (options) {
	options = Object.assign({}, DEFAULTS_OPTIONS, options);

	const nameMapping = new Map();

	return function (css, result) {
		css.walkDecls('grid-template-areas', function (decl) {
			const identifiers = getIdentifiers(decl.value);
			if(identifiers){
				renameIdentifiers(identifiers, nameMapping);
			}

			decl.value = replaceIdentifiers(decl.value, identifiers, nameMapping);

			//TODO: if grid-template-columns and grid-template-rows, merge into one definition
		});
	}
};
