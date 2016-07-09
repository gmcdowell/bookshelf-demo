'use strict';


import _ from 'lodash';
import random from 'random-to';
import status from 'node-status';

exports.seed = function (knex, Promise) {
  var tableName = 'book',
    integer_array = [],
    min_val = 1, max_val = 100,
    task = status.addItem(tableName, {
      type: ['count', 'time']
    });

  // create an array of values 1:100
  for (var i = min_val; i <= max_val; i++) {
    integer_array.push(i);
  }


  return knex('author').select(['id'])
    .then(function (result) {
      var updates = [];

      _.forEach(integer_array, function (bid) {
        var r = result[random.from1to(result.length)];
        if (!_.has(r, 'id')) {
          r = {id: 1};
        } // random not that reliable it turns out ;)
        updates.push(
          knex(tableName).where({id: bid}).update({author_id: r.id})
        )
      });

      return Promise.all(updates)
        .then(() => {
          task.inc(inserts.length);
        });
    })
};
