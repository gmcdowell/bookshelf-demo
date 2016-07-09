'use strict';

import _ from 'lodash';
import random from 'random-to';
import status from 'node-status';

exports.seed = function (knex, Promise) {

  // associate each Person with a 'random' number of books
  let tableName = 'person_book',
    integer_array = [],
    min_val = 1, max_val = 100,
    task = status.addItem(tableName, {
      type: ['count', 'time']
    });

  // create an array of values 1:100
  for (var i = min_val; i < max_val; i++) {
    integer_array.push(i);
  }

  return knex('person').select(['id'])
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
      return Promise.all(inserts)
        .then(() => {
          task.inc(inserts.length);
        });
    })
};
