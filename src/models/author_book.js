/**
 * Created by greg on 27/04/15.
 */

import DB from './base_model';

let AuthorBook = DB.Model.extend({
  tableName: 'author_books',
  hasTimestamps: true
});

// uses Registry plugin
export default DB.model('AuthorBook', AuthorBook);
