'use strict';

import csv_parse from 'csv-parse/lib/sync';
import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import status from 'node-status';

exports.seed = function (knex, Promise) {
  let city_task = status.addItem('capital cities', {
      type: ['count', 'time']
    }),

    capitals_records = csv_parse(fs.readFileSync(path.resolve(__dirname, 'data/capitals.csv'), 'utf8'), {
      delimiter: ';',
      columns: true
    });

  return Promise.each(capitals_records, row => {

    return knex('country')
      .where({code: _.get(row, 'Country code')})
      .select('id')
      .then(country_id => {

        // capital cities
        return knex('city').insert({
          name: _.get(row, 'City (en)'),
          country_id: country_id.length ? country_id[0].id : null,
          population: _.get(row, 'Population'),
          gps_coordinates: knex.raw('point(:lat, :long)', {
            lat: _.get(row, 'Latitude'),
            long: _.get(row, 'Longitude')
          }),
          is_capital: true
        })
      })
      .then(() => {
        city_task.inc();
      });

  });

};
