
var gulp = require('gulp');
var connect = require('gulp-connect');


gulp.task('connect', function() {
  connect.server({
    root: "./www",
    livereload: true,
    port: 9000
  });
});

var _ = require('lodash');