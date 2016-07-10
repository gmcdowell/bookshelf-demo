'use strict';

exports.up = function(knex, Promise) {
  
  return Promise.all([
    // country
    knex.schema.createTableIfNotExists('country', function(table){
      table.increments('id');
      table.string('name').notNullable();
      table.string('code').notNullable();
      table.integer('population').notNullable();
      table.integer('area');
      table.integer('coastline');
      table.string('phone_prefix');
      table.string('currency_code');
      table.float('birth_rate');
      table.float('death_rate');
      table.float('life_expectancy');
      table.integer('currency_id').references('id').inTable('currency');
      table.integer('continent_id').references('id').inTable('continent');
      table.integer('government_id').references('id').inTable('government');
      //table.integer('capital_city_id');//.references('id').inTable('city');
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
      table.string('name').notNullable();
      table.timestamps(true, true);
    }),

    // government
    knex.schema.createTableIfNotExists('government', function (table) {
      table.increments('id');
      table.string('name').notNullable();
      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex, Promise) {

  return Promise.all([
    knex.schema.dropTableIfExists('city'),
    knex.schema.dropTableIfExists('country'),
    knex.schema.dropTableIfExists('currency'),
    knex.schema.dropTableIfExists('government'),
    knex.schema.dropTableIfExists('continent')
  ])
};
