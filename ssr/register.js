'use strict';

var fs = require('fs');
var path = require('path');
var index_ts = require('../compiler/svelte.js');

const compileOptions = {};

function capitalise(name) {
	return name[0].toUpperCase() + name.slice(1);
}

function register(options) {
	var extensions = options.extensions;

	if (extensions) {
		_deregister('.html');
		extensions.forEach(_register);
	}

	// TODO make this the default and remove in v2
	if ('store' in options) { compileOptions.store = options.store; }
}

function _deregister(extension) {
	delete require.extensions[extension];
}

function _register(extension) {
	require.extensions[extension] = function(module, filename) {
		const name = path.basename(filename)
			.slice(0, -path.extname(filename).length)
			.replace(/^\d/, '_$&')
			.replace(/[^a-zA-Z0-9_$]/g, '');

		const options = Object.assign({}, compileOptions, {
			filename,
			name: capitalise(name),
			generate: 'ssr'
		});

		var ref = index_ts.compile(fs.readFileSync(filename, 'utf-8'), options);
		var code = ref.code;

		return module._compile(code, filename);
	};
}

_register('.html');

module.exports = register;
//# sourceMappingURL=register.js.map
