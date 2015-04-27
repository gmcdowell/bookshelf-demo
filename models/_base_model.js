/**
 * Created by greg on 27/04/15.
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['knex', 'bookshelf', '../knexfile'], function (Knex, Bookshelf, dbConfig) {

   var bookshelf = new Bookshelf(new Knex(dbConfig));

    // enable Bookshelf plugins
    bookshelf.plugin('registry');
    /*bookshelf.plugin('virtuals');
    bookshelf.plugin('visibility');*/

    return bookshelf;
});
