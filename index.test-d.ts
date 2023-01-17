import {expectType} from 'tsd';
import lcid = require('.');
import lcidJson = require('./lcid.json');

expectType<number | undefined>(lcid.to('nb_NO'));
expectType<string | undefined>(lcid.from(1044));
expectType<{readonly [key: string]: string}>(lcid.all);
expectType<{readonly [key: string]: string}>(lcidJson);
