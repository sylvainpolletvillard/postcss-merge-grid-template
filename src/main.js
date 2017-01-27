const optimizeRule = require('./optimize');

module.exports = function () {
	return function (css) {
		css.walkDecls(/grid-template-/, (currentDecl) => {
			const rule = currentDecl.parent;
			optimizeRule(rule);
		});
	};
};
