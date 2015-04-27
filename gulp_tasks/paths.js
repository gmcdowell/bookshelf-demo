var path = require('path'),
    paths = {
        server_path: __dirname,
        server_files: '**/*.js',
        ignore_files: [
            'node_modules/**/*',
            'gulp_tasks/**/*'
        ],
        test_files: 'tests/specs/**/*.js'
    };

paths.file_glob = [paths.server_files, paths.test_files];
//paths.hint_glob = paths.file_glob.concat(paths.ignore_files);

module.exports = paths;
