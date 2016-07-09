'use strict';

exports.up = function(knex, Promise) {
  
  return Promise.all([
    // country
    knex.schema.createTableIfNotExists('country', function(table){
      table.increments('id');
      table.string('name').notNullable();
      table.string('code').notNullable();
      table.integer('capital_city_id');//.references('id').inTable('city');
      table.integer('population').notNullable();
      table.string('phone_prefix');
      table.integer('continent_id').references('id').inTable('continent');
      table.timestamps(true, true);
    }),

    // continent
    knex.schema.createTableIfNotExists('continent', function(table){
      table.increments('id');
      table.string('name');
      table.timestamps(true, true);
    }),

    // city
    knex.schema.createTableIfNotExists('city', function(table){
      table.increments('id');
      table.string('name').notNullable();
      table.integer('population');
      table.integer('country_id');//.references('id').inTable('country');
      //table.boolean('is_capital').defaultTo(false);
      table.timestamps(true, true);
    }),

    // currency
    knex.schema.createTableIfNotExists('currency', function(table){
      table.increments('id');
      table.string('code').notNullable();
      table.string('name').notNullable();
      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex, Promise) {

  return Promise.all([
    knex.schema.dropTableIfExists('currency'),
    knex.schema.dropTableIfExists('city'),
    knex.schema.dropTableIfExists('country'),
    knex.schema.dropTableIfExists('continent')
  ])
};
