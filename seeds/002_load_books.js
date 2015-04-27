'use strict';

exports.seed = function (knex, Promise) {
    var tableName = 'books',
        fs = Promise.promisifyAll(require('fs')),
        path = require('path'),
        datafile = path.join(__dirname, 'data/books.json');

    return fs.readFileAsync(datafile, 'utf8')
        .then(function (data) {
            var inserts = [], records = JSON.parse(data);
            for (var i = 0; i < records.length; ++i) {
                inserts.push(knex(tableName)
                    .insert({
                        title: records[i].title
                    }));
            }
            return Promise.all(inserts).then(function (outcomes) {
                console.log(outcomes);
            });
        });
};
