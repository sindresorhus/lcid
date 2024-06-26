// import lcidCodes from './lcid.json'; // TODO: Use `with` here when TypeScript supports it.

declare const lcid: {
	/**
	Get a [standard locale identifier](https://en.wikipedia.org/wiki/Locale_(computer_software)) from a [Windows locale identifier (LCID)](https://en.wikipedia.org/wiki/Locale#Specifics_for_Microsoft_platforms).

	@example
	```
	import lcid from 'lcid';

	lcid.from(1044);
	//=> 'nb_NO'
	```
	*/
	from(lcidCode: number): string | undefined;

	/**
	Get a [standard locale identifier](https://en.wikipedia.org/wiki/Locale_(computer_software)) from a [Windows locale identifier (LCID)](https://en.wikipedia.org/wiki/Locale#Specifics_for_Microsoft_platforms).

	@example
	```
	import lcid from 'lcid';

	lcid.from(1044);
	//=> 'nb_NO'
	```
	*/
	// from(lcidCode: keyof typeof lcidCodes): string;

	/**
	Get a [Windows locale identifier (LCID)](https://en.wikipedia.org/wiki/Locale#Specifics_for_Microsoft_platforms) from a [standard locale identifier](https://en.wikipedia.org/wiki/Locale_(computer_software)).

	@example
	```
	import lcid from 'lcid';

	lcid.to('nb_NO');
	//=> 1044
	```
	*/
	to(localeId: string): number | undefined;

	/**
	Mapping between [standard locale identifiers](https://en.wikipedia.org/wiki/Locale_(computer_software)) and [Windows locale identifiers (LCID)](https://en.wikipedia.org/wiki/Locale#Specifics_for_Microsoft_platforms).

	@example
	```
	import lcid from 'lcid';

	lcid.all;
	//=> {'af_ZA': 1078, …}
	```
	*/
	readonly all: Record<string, number>;
	// TODO: readonly all: typeof lcidCodes;
};

export default lcid;
