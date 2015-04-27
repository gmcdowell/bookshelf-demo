/**
 * Created by greg on 27/04/15.
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['./_base_model'], function (DB) {

    var Person = DB.Model.extend({
        tableName: 'persons',
        hasTimestamps: true,

        // relations
        books: function(){
            return this.belongsToMany('Book').through('PersonBook');
        }
    });

    // uses Registry plugin
    return DB.model('Person', Person);
});
