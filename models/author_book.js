/**
 * Created by greg on 27/04/15.
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['./_base_model'], function (DB) {

    var AuthorBook = DB.Model.extend({
        tableName: 'author_books',
        hasTimestamps: true
    });

    // uses Registry plugin
    return DB.model('AuthorBook', AuthorBook);
});
