const optimizeRule = require('./optimize');

module.exports = function () {
	const nameMapping = new Map();
	return {
		postcssPlugin: 'postcss-merge-grid-template',
		Declaration(decl) {
			if (/grid-template-/.test(decl.prop)) {
				const rule = decl.parent;
				optimizeRule(rule, nameMapping);
			}

			if (decl.prop === 'grid-area') {
				// TODO: handle all formats possible for grid-area
				if (nameMapping.has(decl.value)) {
					decl.value = nameMapping.get(decl.value);
				}
			}
		}
	}
};

module.exports.postcss = true