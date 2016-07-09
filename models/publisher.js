/**
 * Created by greg on 28/04/15.
 */

import DB from './base_model';

let Publisher = DB.Model.extend({
  tableName: 'publishers',

  contact(){
    return this.morphTo('published_by', ['contact_type', 'contact_id'], 'Person', 'Author');
  }
});

export default DB.model('Publisher', Publisher);

