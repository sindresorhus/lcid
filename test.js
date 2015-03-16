'use strict';
var test = require('ava');
var lcid = require('./');

test('.from()', function (t) {
	t.assert(lcid.from(1044) === 'nb_NO');
	t.end();
});

test('.to()', function (t) {
	t.assert(lcid.to('nb_NO') === 1044);
	t.end();
});

test('.all', function (t) {
	t.assert(typeof lcid.all === 'object');
	t.assert(lcid.all['nb_NO'] === 1044);
	t.end();
});
