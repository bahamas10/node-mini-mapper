var assert = require('assert');

var minimapper = require('../');

var s = [
  'this is a test',
  'of the minimapper',
  'node module to ensure',
  'it all works'
].join('\n');
var mini = '⣿⢽⣺⢵⣷⣟⠿⠲⠦⠤⠄\n';

console.log(s);
console.log(mini);
assert.deepEqual(minimapper(s), mini);
