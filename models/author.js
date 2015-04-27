/**
 * Created by greg on 27/04/15.
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['./base_model'], function (DB) {

    var Author = DB.Model.extend({
        tableName: 'author',
        hasTimestamps: true,

        // relations
        person: function(){
            return this.hasOne('Person');
        },

        books: function(){
            return this.hasMany('Book');
        }
    });

    // uses Registry plugin
    return DB.model('Author', Author);
});
