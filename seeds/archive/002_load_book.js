'use strict';

import status from 'node-status';
import data from '../data/books.json';

exports.seed = function (knex, Promise) {
  let tableName = 'book',
    task = status.addItem(tableName, {
      type: ['count', 'time']
    });

  return Promise.resolve(data)
    .each(record => {
      return knex(tableName).insert({
        title: record.title
      })
        .then(() => {
          task.inc();
        })
    });
};
