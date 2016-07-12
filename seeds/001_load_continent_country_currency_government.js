'use strict';

import csv_parse from 'csv-parse/lib/sync';
import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import status from 'node-status';


exports.seed = function (knex, Promise) {
  let country_task = status.addItem('countries', {
      type: ['count', 'time']
    }),
    continent_task = status.addItem('continents', {
      type: ['count', 'time']
    }),
    government_task = status.addItem('governments', {
      type: ['count', 'time']
    }),
    currency_task = status.addItem('currencies', {
      type: ['count', 'time']
    });


  let country_records = csv_parse(fs.readFileSync(path.resolve(__dirname, 'data/countries.csv'), 'utf8'), {
      delimiter: ';',
      columns: true
    });

  return Promise.each(country_records, row => {

    return Promise.join(
      // continent
      knex('continent')
        .where({name: _.get(row, 'Continent')})
        .select('id')
        .then(result => {
          if (result.length < 1) {
            return knex('continent')
              .insert({name: _.get(row, 'Continent')})
              .returning('id')
              .tap(() => {
                continent_task.inc();
              })
              .then(r => {
                return [{id: r[0]}]
              })
          }
          else return result;
        }),

      // currency
      knex('currency')
        .where({name: _.get(row, 'Currency')})
        .select('id')
        .then(result => {
          if (result.length < 1) {
            return knex('currency')
              .insert({name: _.get(row, 'Currency')})
              .returning('id')
              .tap(() => {
                currency_task.inc();
              })
              .then(r => {
                return [{id: r[0]}]
              })
          }
          else return result;
        }),

      // government
      knex('government')
        .where({name: _.get(row, 'Government form')})
        .select('id')
        .then(result => {
          if (result.length < 1) {
            return knex('government')
              .insert({name: _.get(row, 'Government form')})
              .returning('id')
              .tap(() => {
                government_task.inc();
              })
              .then(r => {
                return [{id: r[0]}]
              })
          }
          else return result;
        }),

      // handler
      (continent_id, currency_id, government_id) => {

        // country
        return knex('country')
          .insert({
            code: _.get(row, 'Country code'),
            name: _.get(row, 'Country (en)'),
            currency_code: _.get(row, 'Currency code'),
            phone_prefix: _.get(row, 'Dialing prefix'),
            population: _.get(row, 'Population'),
            area: _.get(row, 'Area'),
            coastline: _.get(row, 'Coastline'),
            birth_rate: _.get(row, 'Birthrate'),
            death_rate: _.get(row, 'Deathrate'),
            life_expectancy: _.get(row, 'Life expectancy'),
            continent_id: continent_id[0].id,
            currency_id: currency_id[0].id,
            government_id: government_id[0].id
          })
          .returning('id')

      }
    )
      .tap(() => {
        country_task.inc();
      })

  });
};