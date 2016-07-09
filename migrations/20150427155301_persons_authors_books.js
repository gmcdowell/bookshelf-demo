'use strict';

exports.up = function (knex, Promise) {

  return Promise.all([
    // create a Persons table
    knex.schema.createTable('person', function (table) {
      table.increments('id');
      table.string('first_name').notNullable();
      table.string('family_name').notNullable();
      table.string('email').notNullable();
      table.timestamps(false, true); // use timestamp type and default to current_timestamp
    }),

    // create an Authors table
    knex.schema.createTable('author', function (table) {
      table.increments('id');
      table.integer('person_id').references('id').inTable('person');
      table.timestamps(false, true);
    }),

    knex.schema.createTable('publisher', function (table) {
      table.increments('id');
      table.integer('contact_id');
      table.string('contact_type').defaultTo('person');
      table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    }),

    // create a Books table
    knex.schema.createTable('book', function (table) {
      table.increments('id');
      table.string('title').notNullable();
      table.integer('author_id').references('id').inTable('author');
      table.integer('publisher_id').references('id').inTable('publisher');
      table.timestamps(false, true);
    }),

    // create a PersonBooks table
    knex.schema.createTable('person_book', function (table) {
      table.increments('id');
      table.integer('person_id').references('id').inTable('person').notNullable();
      table.integer('book_id').references('id').inTable('book').notNullable();
      table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    })
  ]);

};

exports.down = function (knex, Promise) {

  return Promise.all([
    knex.schema.dropTableIfExists('person_book'),
    knex.schema.dropTableIfExists('book'),
    knex.schema.dropTableIfExists('publisher'),
    knex.schema.dropTableIfExists('author'),
    knex.schema.dropTableIfExists('person')
  ]);
};
