import invertKv from 'invert-kv';
import all from './lcid.json' with {type: 'json'};

const inverted = invertKv(all);

const lcid = {};

lcid.from = lcidCode => {
	if (typeof lcidCode !== 'number') {
		throw new TypeError('Expected a number');
	}

	return all[lcidCode];
};

lcid.to = localeId => {
	if (typeof localeId !== 'string') {
		throw new TypeError('Expected a string');
	}

	const lcidCode = inverted[localeId];
	if (lcidCode) {
		return Number(inverted[localeId]);
	}
};

lcid.all = new Proxy(
	inverted,
	{
		get(target, name) {
			const lcid = target[name];
			if (lcid) {
				return Number(lcid);
			}
		}
	}
);

export default lcid;
