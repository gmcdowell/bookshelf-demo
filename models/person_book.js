/**
 * Created by greg on 27/04/15.
 */

import DB from './base_model';

let PersonBook = DB.Model.extend({
  tableName: 'person_books',
  hasTimestamps: true
});

// uses Registry plugin
export default DB.model('PersonBook', PersonBook);

