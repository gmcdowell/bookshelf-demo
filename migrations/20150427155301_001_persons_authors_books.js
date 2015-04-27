'use strict';

exports.up = function(knex, Promise) {

    return Promise.all([
        // create a Persons table
        knex.schema.createTable('persons', function(table){
            table.increments('id');
            table.string('first_name').notNullable();
            table.string('family_name').notNullable();
            table.string('email').notNullable();
            table.timestamps();
        })
            .then(function(){
                return knex.raw('ALTER TABLE persons ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP');
            }),

        // create an Authors table
        knex.schema.createTable('authors', function(table){
            table.increments('id');
            table.integer('person_id').references('id').inTable('persons');
            table.timestamps();
        })
            .then(function(){
                return knex.raw('ALTER TABLE authors ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP');
            }),

        // create a Books table
        knex.schema.createTable('books', function(table){
            table.increments('id');
            table.string('title').notNullable();
            table.integer('author_id').references('id').inTable('authors');
            table.timestamps();
        })
            .then(function(){
                return knex.raw('ALTER TABLE books ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP');
            }),

        // create a PersonBooks table
        knex.schema.createTable('person_books', function(table) {
            table.increments('id');
            table.integer('person_id').references('id').inTable('persons').notNullable();
            table.integer('book_id').references('id').inTable('books').notNullable();
            table.timestamp('created_at');
        })
            .then(function(){
                return knex.raw('ALTER TABLE person_books ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP');
            })
    ]);

};

exports.down = function(knex, Promise) {

    return Promise.all([
        knex.schema.dropTableIfExists('person_books'),
        knex.schema.dropTableIfExists('books'),
        knex.schema.dropTableIfExists('authors'),
        knex.schema.dropTableIfExists('persons')
    ]);
};
