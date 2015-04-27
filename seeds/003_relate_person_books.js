'use strict';
var _ = require('lodash'),
    random = require('random-to');

exports.seed = function (knex, Promise) {

    // associate each Person with a 'random' number of books
    var tableName = 'person_books',
        integer_array = [],
        min_val = 1, max_val = 100;

    // create an array of values 1:100
    for (var i = min_val; i < max_val; i++) {
        integer_array.push(i);
    }

    return knex('persons').select(['id'])
        .then(function (result) {
            var inserts = [];

            _.forEach(result, function (p) {

                // generate a quasi sample of book_id's, and relate to person
                var book_ids = _.sample(integer_array, random.from1to(max_val));
                _.forEach(book_ids, function (bid) {
                    inserts.push(
                        knex(tableName).insert({person_id: p.id, book_id: bid})
                    )
                });
            });
            return Promise.all(inserts);
        })
};
