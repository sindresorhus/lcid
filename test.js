import test from 'ava';
import m from '.';

test('.from()', t => {
	t.is(m.from(1044), 'nb_NO');
});

test('.to()', t => {
	t.is(m.to('nb_NO'), 1044);
});

test('.all', t => {
	t.is(typeof m.all, 'object');
	t.is(m.all.nb_NO, 1044);
});
