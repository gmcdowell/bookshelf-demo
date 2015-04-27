/**
 * Created by greg on 27/04/15.
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['./base_model', './person','./book'], function (DB) {

    var Author = DB.Model.extend({
        tableName: 'authors',
        hasTimestamps: true,

        // relations
        person: function(){
            return this.belongsTo('Person');
        },

        books: function(){
            return this.hasMany('Book');
        },

        publish: function(){
            return this.morphOne('Publisher', 'published_by', ['contact_type', 'contact_id'])
        }
    });

    // uses Registry plugin
    return DB.model('Author', Author);
});
