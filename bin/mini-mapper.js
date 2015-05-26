#!/usr/bin/env node

var fs = require('fs');

var minimap = require('../');

var file = process.argv[2] || '/dev/stdin';

process.stdout.write(minimap(fs.readFileSync(file, 'utf8')));
