/**
 * Create a minimap like the sublime text editor for given text input using braille characters
 *
 * http://www.alanwood.net/unicode/braille_patterns.html
 * dots:
 *   ,___,
 *   |1 4|
 *   |2 5|
 *   |3 6|
 *   |7 8|
 *   `````
 *
 * https://github.com/asciimoo/drawille
 *
 * Author: Dave Eddy <dave@daveeddy.com>
 * Date: May 25, 2015
 * License: MIT
  */

var BRAILLE_OFFSET = 0x2800
var PIXEL_MAP = [
  [0x01, 0x08],
  [0x02, 0x10],
  [0x04, 0x20],
  [0x40, 0x80],
];

module.exports = minimap;
function minimap(s, opts) {
  opts = opts || {};
  if (opts.tab === undefined)
    opts.tab = '    ';

  // loop each line
  var lines = s.split('\n');
  var map = [];
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    line = line.replace(/\t/g, opts.tab);
    var rowindex = Math.floor(i / 4);
    var row = i % 4;
    map[rowindex] = map[rowindex] || [];

    // loop each character
    for (var j = 0; j < line.length; j++) {
      var c = line[j];
      var columnindex = Math.floor(j / 2);
      var column = j % 2;

      // init the char
      if (map[rowindex][columnindex] === undefined)
        map[rowindex][columnindex] = 0;

      // toggle it
      if (c !== ' ')
        map[rowindex][columnindex] += PIXEL_MAP[row][column];
    }
  }

  s = '';
  map.forEach(function(line) {
    line.forEach(function(c) {
      s += String.fromCharCode(BRAILLE_OFFSET + c);
    });
    s += '\n';
  });

  return s;
}
