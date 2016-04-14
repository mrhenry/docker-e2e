var tags = process.env["TAGS"].split(" ");
tags = tags.filter(function(e) { return e && e.length > 0; });

var disableMobile = tags.indexOf("~@mobile") >= 0;

exports.config = {
	specs: ["/app/features/*.feature"],

	framework: 'custom',
	frameworkPath: require.resolve('protractor-cucumber-framework'),

	maxSessions: 2,
	multiCapabilities: [],

	cucumberOpts: {
		require: ['/support/env.js', '/app/support/*.js', '/app/steps/*.js'],
		format: 'pretty'
	}
}

var extra = require('/app/config.js');

if (extra.browsers.ie8) {
	exports.config.multiCapabilities.push(Object.assign({
		name: "IE8",
		browserName : 'internet explorer',
		platform : 'VISTA',
		version : '8',
		cucumberOpts: {
			tags: tags.concat(["~@mobile"]),
		},
	}, extra.testingbot));
}

if (extra.browsers.ie9) {
	exports.config.multiCapabilities.push(Object.assign({
		name: "IE9",
		browserName : 'internet explorer',
		platform : 'VISTA',
		version : '9',
		cucumberOpts: {
			tags: tags.concat(["~@mobile"]),
		},
	}, extra.testingbot));
}

if (extra.browsers.ie10) {
	exports.config.multiCapabilities.push(Object.assign({
		name: "IE10",
		browserName : 'internet explorer',
		platform : 'WIN8',
		version : '10',
		cucumberOpts: {
			tags: tags.concat(["~@mobile"]),
		},
	}, extra.testingbot));
}

if (extra.browsers.ie11) {
	exports.config.multiCapabilities.push(Object.assign({
		name: "IE11",
		browserName : 'internet explorer',
		platform : 'WIN8',
		version : '11',
		cucumberOpts: {
			tags: tags.concat(["~@mobile"]),
		},
	}, extra.testingbot));
}

if (extra.browsers.edge) {
	exports.config.multiCapabilities.push(Object.assign({
		name: "EDGE",
		browserName : 'microsoftedge',
		platform : 'WIN10',
		version : '13',
		cucumberOpts: {
			tags: tags.concat(["~@mobile"]),
		},
	}, extra.testingbot));
}

if (extra.browsers.sa7) {
	exports.config.multiCapabilities.push(Object.assign({
		name: "SA7",
		browserName : 'safari',
		platform : 'MAVERICKS',
		version : '7',
		cucumberOpts: {
			tags: tags.concat(["~@mobile"]),
		},
	}, extra.testingbot));
}

if (extra.browsers.sa8) {
	exports.config.multiCapabilities.push(Object.assign({
		name: "SA8",
		browserName : 'safari',
		platform : 'YOSEMITE',
		version : '8',
		cucumberOpts: {
			tags: tags.concat(["~@mobile"]),
		},
	}, extra.testingbot));
}

if (extra.browsers.sa9) {
	exports.config.multiCapabilities.push(Object.assign({
		name: "SA9",
		browserName : 'safari',
		platform : 'CAPITAN',
		version : '9',
		cucumberOpts: {
			tags: tags.concat(["~@mobile"]),
		},
	}, extra.testingbot));
}

if (extra.browsers.chrome) {
	exports.config.multiCapabilities.push(Object.assign({
		browserName: 'chrome',
		cucumberOpts: {
			tags: tags.concat(["~@mobile"]),
		},
	}, extra.docker));
}

if (extra.browsers.firefox) {
	exports.config.multiCapabilities.push(Object.assign({
		browserName: 'firefox',
		cucumberOpts: {
			tags: tags.concat(["~@mobile"]),
		},
	}, extra.docker));
}

if (extra.browsers.iphone8 && !disableMobile) {
	exports.config.multiCapabilities.push(Object.assign({
		name: "IPHONE8",
		browserName : 'iphone',
		platform : 'YOSEMITE',
		version : '8.1',
		cucumberOpts: {
			tags: tags.concat(["~@desktop"]),
		},
	}, extra.testingbot));
}

if (extra.browsers.iphone9 && !disableMobile) {
	exports.config.multiCapabilities.push(Object.assign({
		name: "IPHONE9",
		browserName : 'iphone',
		platform : 'CAPITAN',
		version : '9.2',
		cucumberOpts: {
			tags: tags.concat(["~@desktop"]),
		},
	}, extra.testingbot));
}

if (extra.setup) {
	extra.setup(exports.config);
}
