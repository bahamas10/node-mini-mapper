mini-mapper
===========

Create a minimap like the sublime text editor for given text input using braille characters


Example
-------

``` js
var minimapper = require('mini-mapper');

var s = 'hello world\nthis is a test\nfor the mini-mapper\nnode-module';

minimapper(s);
// => "⣿⣟⣵⣏⣯⡷⠶⠤⠤⠄"
```

Command Line
------------

```
$ mini-mapper < package.json
⠁⣶⣶⣶⣦⣶⣲⣶⢶⣶⣖⣒⢀⢀⣀⣀⣀⢀⣀⡀⣀⡀⣀⣀⣀⡀⣀⣀⢀⣀⣀⡀⣀⡀⣀⣀⡀⣀⣀⢀⣀⣀⣀
⠀⣛⠿⠿⠷⠟⠽⠭⠍⠭⠭⠭⠭⠡⠄⠤⠤⠠⠤⠤⠤⠤⠤⠠⠄⠤⠤⠠⠄
⠀⣭⣛⣛⣚⣒⣒⡒⡒⠐⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠂
⠀⣤⣛⣛⣛⣑⡛⡛⠛⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒
⠀⠀⣿⣿⣿⣯⡭
⠀⣿⣶⣶⡶⡦⠲⠶⠦⠖⠒⠐⠒⠒⠒⠒⠒⠒⠒⠒⠒⠐⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒
⠀⣶⣭⣭⣭⣬⣍⣭⡭⡭⠭⠭⠭⠭⠭⠭⠭⠭⠭⠭⠭⠭⠭⠭⠭⠭⠭⠭⠭⠭⠭⠉⠁
⠂⠁
```

Usage
-----

### `minimapper(s[, opts])`

Given a string `s`, this function returns a braille mini-mapped string.

- `s`: the string to minimap
- `opts`: options object
  - `opts.tab`: character(s) to expand tabs to, defaults to `'    '` (four spaces)

Installation
------------

Module

    npm install mini-mapper

Command-line tool

    [sudo] npm install -g mini-mapper

License
-------

MIT License
