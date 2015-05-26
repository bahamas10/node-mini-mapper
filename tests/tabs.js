var assert = require('assert');

var minimapper = require('../');

var tabchars = [
  '        ',
  '    ',
  '  ',
  'fooo',
];

tabchars.forEach(function(tab) {
  var minitab = minimapper(tab).replace(/\n/, '');
  for (var i = 0; i <= 4; i++) {
    var s = (new Array(i + 1).join('\t')) + i + ' tabs';
    var mini = (new Array(i + 1).join(minitab)) + '⠁⠉⠉\n';
    assert.deepEqual(minimapper(s, {tab: tab}), mini);
  }
});
