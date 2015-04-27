/**
 * Created by greg on 28/04/15.
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['./base_model'], function (DB) {

    var Publisher = DB.Model.extend({
        tableName: 'publishers',

        contact: function(){
            return this.morphTo('published_by', ['contact_type', 'contact_id'], 'Person', 'Author');
        }
    });

    return DB.model('Publisher', Publisher);
});
