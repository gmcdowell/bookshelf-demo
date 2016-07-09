'use strict';


import _ from 'lodash';
import random from 'random-to';
import status from 'node-status';

exports.seed = function (knex, Promise) {

  var tableName = 'author',
    integer_array = [],
    min_val = 1, max_val = 100,
    task = status.addItem(tableName, {
      type: ['count', 'time']
    });

  // create an array of values 1:100
  for (var i = min_val; i < max_val; i++) {
    integer_array.push(i);
  }

  var person_ids = _.sample(integer_array, random.from1to(max_val)), inserts = [];

  _.forEach(person_ids, function (pid) {
    inserts.push(
      knex(tableName).insert({person_id: pid})
    )
  });

  return Promise.all(inserts)
    .then(() => {
      task.inc(inserts.length);
    });

};
