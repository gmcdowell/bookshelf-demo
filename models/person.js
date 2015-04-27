/**
 * Created by greg on 27/04/15.
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['./base_model', './book', './person_book'], function (DB) {

    var Person = DB.Model.extend({
        tableName: 'persons',
        hasTimestamps: true,

        // relations
        books: function(){
            return this.belongsToMany('Book').through('PersonBook');
        },

        publish: function(){
            return this.morphOne('Publisher', 'published_by', ['contact_type', 'contact_id'])
        }
    });

    // uses Registry plugin
    return DB.model('Person', Person);
});
