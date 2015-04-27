/**
 * Created by greg on 27/04/15.
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['./base_model'], function (DB) {

    var PersonBook = DB.Model.extend({
        tableName: 'person_books',
        hasTimestamps: true
    });

    // uses Registry plugin
    return DB.model('PersonBook', PersonBook);
});
