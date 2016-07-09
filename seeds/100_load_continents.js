'use strict';

import parse from 'csv-parse/lib/sync';
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
    city_task = status.addItem('cities', {
      type: ['count', 'time']
    });


  let country_records = parse(fs.readFileSync(path.resolve(__dirname, 'data/countries.csv'), 'utf8'), {
      delimiter: ';',
      columns: true
    }),
    capitals_records = parse(fs.readFileSync(path.resolve(__dirname, 'data/capitals.csv'), 'utf8'), {
      delimiter: ';',
      columns: true
    });

  return Promise.each(country_records, row => {

    return knex('continent').where({name: _.get(row, 'Continent')})
      .select('id')
      .then(result => {
        if (result.length < 1) {
          return knex('continent')
            .insert({name: _.get(row, 'Continent')})
            .returning('id')
            .tap(() => {
              continent_task.inc();
            });
        }
        else return result;
      })
      .then(result => {

        return Promise.join(
          // country
          knex('country')
            .insert({
              code: _.get(row, 'Country code'),
              name: _.get(row, 'Country (en)'),
              //currency_code: _.get(row, 'Currency code'),
              //currency: _.get(row, 'Currency'),
              phone_prefix: _.get(row, 'Dialing prefix'),
              population: _.get(row, 'Population'),
              continent_id: result[0].id
            })
            .returning('id')
            .tap(() => {
              country_task.inc();
            })
          ,

          // city
          knex('city')
            .insert({
              name: _.get(row, 'Capital')
            })
            .returning('id')
            .tap(() => {
              city_task.inc();
            }),

          // handler
          (country_id, city_id) => {
            console.log('------', country_id, city_id);

            let todo = [];

            if (city_id.length > 0) {
              todo.push(knex('country')
                .update({capital_city_id: _.parseInt(city_id[0].id)})
                .where({id: _.parseInt(country_id[0].id)}));

              todo.push(knex('city')
                .update({country_id: _.parseInt(country_id[0].id)})
                .where({id: _.parseInt(city_id[0].id)}))
            }

            console.log('todo: ', todo);

            // now update each with the converse id
            return Promise.all(todo)
          }
        )

      })

  });
};