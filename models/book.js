/**
 * Created by greg on 27/04/15.
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['./base_model'], function (DB) {

    var Book = DB.Model.extend({
        tableName: 'books',
        hasTimestamps: true,

        // relations
        author: function(){
            return this.hasOne('Author');
        },

        owners: function(){
            return this.belongsToMany('Person').through('PersonBook');
        }
    });

    // uses Registry plugin
    return DB.model('Book', Book);
});
