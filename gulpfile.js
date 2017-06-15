'use strict';

const api = require('./server/api');

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');

build.initialize(gulp);
