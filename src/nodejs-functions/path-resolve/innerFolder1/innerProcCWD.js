import path from 'path';
export default () => {
  console.log('// innerResolve.js');
  console.log(`started from parent process.cwd(): ${path.resolve()}`);
};