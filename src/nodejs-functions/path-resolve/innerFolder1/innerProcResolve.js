import path from 'path';

export default () => {
  console.log('// innerProcResolve.js');
  console.log(`started from parent process.cwd(): ${process.cwd()}`);
};