/**
 * Created by greg on 27/04/15.
 */

import DB from './base_model';

let Person = DB.Model.extend({
  tableName: 'persons',
  hasTimestamps: true,

  // relations
  books() {
    return this.belongsToMany('Book').through('PersonBook');
  },

  publish() {
    return this.morphOne('Publisher', 'published_by', ['contact_type', 'contact_id'])
  }
});

// uses Registry plugin
export default DB.model('Person', Person);

