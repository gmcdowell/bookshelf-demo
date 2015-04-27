/**
 * Created by greg on 28/04/15.
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define([
    './author',
    './book',
    './person',
    './publisher',
    './base_model'
], function (Author, Book, Person, Publisher, DB) {

    return {
        Author: Author,
        Book: Book,
        Person: Person,
        Publisher: Publisher,
        DB: DB
    };
});