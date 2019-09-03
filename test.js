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
	t.is(lcid.all.nb_NO, '1044');
});
