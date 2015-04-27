var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    requireDir = require('require-dir');

var plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/,
    scope: ['devDependencies'],
    camelize: true
});

// Include gulp tasks
requireDir('./gulp_tasks');

// Utility methods
gulp.task('ls', plugins.taskListing);

