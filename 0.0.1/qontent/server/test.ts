import { Test } from '../qomponents/server/test-api';
import { argv } from 'process';
import Config from './config';

let test = new Test(Config, `http://localhost:${Config.ENV.PORT}`, argv); // create testing object with our testing configuration

// get arguments
// console.log(argv[2]);
