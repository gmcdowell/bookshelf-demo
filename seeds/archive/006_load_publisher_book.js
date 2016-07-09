'use strict';


import _ from 'lodash';
import random from 'random-to';
import status from 'node-status';

exports.seed = function (knex, Promise) {

  var tableName = 'publisher',
    integer_array = [],
    min_val = 1, max_val = 25,
    task = status.addItem(tableName, {
      type: ['count', 'time']
    });

  // create an array of values 1:100
  for (var i = min_val; i <= max_val; i++) {
    integer_array.push(i);
  }

  return knex('author').select(['id'])
    .then(function (result) {
      var inserts = [],
        author_ids = [],
        person_ids = [];

      // loop through all the books (quasi)
      _.forEach(integer_array, function (bid) { // book_id

        // assign every 3rd book to an author-publisher
        if (bid % 3 === 1) { //
          var r_authors = result[random.from1to(result.length)];
          if (!_.has(r_authors, 'id')) {
            r_authors = {id: 1};
          } // random not that reliable it turns out ;)
          // add to array of ids used
          if (author_ids.indexOf(r_authors.id) < 1) {
            author_ids.push(r_authors.id);

            inserts.push(
              knex(tableName).insert({contact_id: r_authors.id, contact_type: 'authors'})
            )
          }

        }

        // assign all others to person-publisher
        else {
          var r = result[random.from1to(max_val)];
          if (!_.has(r, 'id')) {
            r = {id: 1};
          } // random not that reliable it turns out ;)

          if (person_ids.indexOf(r.id) < 1) {
            person_ids.push(r.id);
            inserts.push(
              knex(tableName).insert({contact_id: r.id, contact_type: 'persons'})
            )
          }
        }

      });

      return Promise.all(inserts)
        .then(() => {
          task.inc(inserts.length);
        });

    })
};