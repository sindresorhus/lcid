# lcid

> Mapping between [standard locale identifiers](https://en.wikipedia.org/wiki/Locale_(computer_software)) and [Windows locale identifiers (LCID)](https://en.wikipedia.org/wiki/Locale#Specifics_for_Microsoft_platforms)

The mapping itself is just a [JSON file](lcid.json) and can be used anywhere.

## Install

```sh
$ npm install lcid
```

## Usage

```js
import lcid from 'lcid';

lcid.from(1044);
//=> 'nb_NO'

lcid.to('nb_NO');
//=> 1044

lcid.all;
//=> {'af_ZA': 1078, …}
```
