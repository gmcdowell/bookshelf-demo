'use strict';

var _ = require('lodash'),
    random = require('random-to');

exports.seed = function(knex, Promise) {
    var tableName = 'books',
        integer_array = [],
        min_val = 1, max_val = 100;

    // create an array of values 1:100
    for (var i = min_val; i <= max_val; i++) {
        integer_array.push(i);
    }

    return knex('publishers').select(['id'])
        .then(function (result) {
            var updates = [];

            // loop through all the books (quasi)
            _.forEach(integer_array, function (bid) { // book_id

                var r = result[random.from1to(result.length)];
                if (!_.has(r, 'id')) {r = {id:1};} // random not that reliable it turns out ;)

                updates.push(
                    knex(tableName).where({id: bid}).update({publisher_id: r.id})
                )

            });

            return Promise.all(updates)
                .catch(function (err) {
                    console.log(err);
                });

        })
};