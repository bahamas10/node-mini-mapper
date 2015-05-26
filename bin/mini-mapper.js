#!/usr/bin/env node

var fs = require('fs');

var minimapper = require('../');

var file = process.argv[2] || '/dev/stdin';

process.stdout.write(minimapper(fs.readFileSync(file, 'utf8')));
