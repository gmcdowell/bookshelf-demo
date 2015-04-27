var paths = require('./paths'),
    gulp = require('gulp'),
    args = require('yargs').argv;

var plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/,
    scope: ['devDependencies'],
    camelize: true
});

function nodemon_task(server_path) {
    return plugins.nodemon({
        script: server_path,
        ext: 'html tpl js',
        ignore: ['node_modules/**']
    })
        .on('start', function () {
        })
        .on('change', function () {
            console.log('changed!');
        })
        .on('restart', function () {
            console.log('restarted!');
        });
}

gulp.task('server', function () {
    return nodemon_task('bin/www');
});
