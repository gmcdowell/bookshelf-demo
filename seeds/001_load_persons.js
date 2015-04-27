'use strict';

exports.seed = function (knex, Promise) {

    var tableName = 'persons',
        fs = Promise.promisifyAll(require('fs')),
        path = require('path'),
        datafile = path.join(__dirname, 'data/people.json');


    return fs.readFileAsync(datafile, 'utf8')
        .then(function (data) {
            var inserts = [], records = JSON.parse(data);
            for (var i = 0; i < records.length; ++i) {
                inserts.push(knex(tableName)
                    .insert({
                        first_name: records[i].first_name,
                        family_name: records[i].family_name,
                        email: records[i].email
                    }));
            }
            return Promise.all(inserts).then(function (outcomes) {
                console.log(outcomes);
            });
        });
};
