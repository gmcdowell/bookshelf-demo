/**
 * Created by greg on 27/04/15.
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['./base_model', './author', './person', './person_book'], function (DB) {

    var Book = DB.Model.extend({
        tableName: 'books',
        hasTimestamps: true,

        // relations
        author: function(){
            return this.belongsTo('Author');
        },

        owners: function(){
            return this.belongsToMany('Person').through('PersonBook');
        },

        publisher: function(){
            return this.belongsTo('Publisher');
        }
    });

    // uses Registry plugin
    return DB.model('Book', Book);
});
