import path from 'path';

import innerProcCWD from './innerFolder1/innerProcCWD.js'
import innerProcResolve from './innerFolder1/innerProcResolve.js'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const { argv } = process;
const [filePath] = argv.slice(2);

console.log(path.resolve());
innerProcCWD();
innerProcResolve();
console.log('---------------');
console.log(__dirname);
