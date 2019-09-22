import test from 'ava';
import lcid from '.';

test('.from()', t => {
	t.is(lcid.from(1044), 'nb_NO');
});

test('.to()', t => {
	t.is(lcid.to('nb_NO'), 1044);
});

test('.all', t => {
	t.is(typeof lcid.all, 'object');
	t.is(lcid.all.nb_NO, 1044);
});

test('.from(1034) should return Spanish locale', t => {
	t.is(lcid.from(1034), 'es_ES');
});

test('.to(\'es_ES\') should return proper Spanish LCID', t => {
	t.is(lcid.to('es_ES'), 3082);
});

test('.all should contain the proper LCID for Spanish', t => {
	t.is(lcid.all.es_ES, 3082);
});
