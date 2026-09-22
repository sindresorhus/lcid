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

	// Exact match first, so distinct `gd-GB` / `gd_GB` entries can coexist.
	let lcidCode = inverted[localeId];
	if (lcidCode) {
		return Number(lcidCode);
	}

	// Accept both `en_US` (legacy) and `en-US` (BCP 47) forms.
	// Most data is stored with underscores, so normalize hyphens as fallback.
	lcidCode = inverted[localeId.replaceAll('-', '_')];
	if (lcidCode) {
		return Number(lcidCode);
	}
};

lcid.all = new Proxy(
	inverted,
	{
		get(target, name) {
			let lcid = target[name];
			if (lcid) {
				return Number(lcid);
			}

			if (typeof name === 'string' && name.includes('-')) {
				lcid = target[name.replaceAll('-', '_')];
				if (lcid) {
					return Number(lcid);
				}
			}
		},
		has(target, name) {
			if (name in target) {
				return true;
			}

			if (typeof name === 'string' && name.includes('-')) {
				return name.replaceAll('-', '_') in target;
			}

			return false;
		}
	}
);

export default lcid;
