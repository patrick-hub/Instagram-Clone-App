module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{ico,html,png,json,txt}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};