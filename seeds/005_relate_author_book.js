'use strict';

var _ = require('lodash'),
    random = require('random-to');

exports.seed = function (knex, Promise) {
    var tableName = 'books',
        integer_array = [],
        min_val = 1, max_val = 100;

    // create an array of values 1:100
    for (var i = min_val; i <= max_val; i++) {
        integer_array.push(i);
    }


    return knex('authors').select(['id'])
        .then(function (result) {
            var updates = [];

            _.forEach(integer_array, function (bid) {
                var r = result[random.from0to(result.length)];
                if (!_.has(r, 'id')) {r = {id:1};} // random not that reliable it turns out ;)
                updates.push(
                    knex(tableName).where({id: bid}).update({author_id: r.id})
                )
            });

            return Promise.all(updates)
                .catch(function (err) {
                    console.log(err);
                });
        })
};
