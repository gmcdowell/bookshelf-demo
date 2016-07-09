'use strict';

import status from 'node-status';
import data from '../data/people.json';

exports.seed = function (knex, Promise) {

  let tableName = 'person',
    task = status.addItem(tableName, {
      type: ['count', 'time']
    });

  return Promise.resolve(data)
    .each(record => {
      return knex(tableName).insert({
        first_name: record.first_name,
        family_name: record.family_name,
        email: record.email
      })
        .then(() => {
          task.inc();
        });
    });
};
