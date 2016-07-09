/**
 * Created by greg on 27/04/15.
 */

import DB from './base_model';
import './author';
import './person';
import './person_book';
import './publisher';

var Book = DB.Model.extend({
  tableName: 'books',
  hasTimestamps: true,

  // relations
  author() {
    return this.belongsTo('Author');
  },

  owners() {
    return this.belongsToMany('Person').through('PersonBook');
  },

  publisher() {
    return this.belongsTo('Publisher');
  }
});

// uses Registry plugin
export default DB.model('Book', Book);

