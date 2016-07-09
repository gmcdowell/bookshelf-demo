/**
 * Created by greg on 27/04/15.
 */

import DB from './base_model';

let Author = DB.Model.extend({
  tableName: 'authors',
  hasTimestamps: true,

  // relations
  person() {
    return this.belongsTo('Person');
  },

  books() {
    return this.hasMany('Book');
  },

  publish() {
    return this.morphOne('Publisher', 'published_by', ['contact_type', 'contact_id'])
  }
});

// uses Registry plugin
export default DB.model('Author', Author);
