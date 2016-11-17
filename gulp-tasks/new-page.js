'use strict';

const path = require('path');
const gulp = require('gulp');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const util = require('gulp-util');


module.exports = () => {
  let name = util.env.name;
  if (!name) {
    throw 'Need to specify a file name';
  }
  return gulp.src("./gulp-tasks/templates/page.html")
    .pipe(ejs({
      name: name
    }))
    .pipe(rename(`page-${name}.html`))
    .pipe(gulp.dest('./src'));
};
