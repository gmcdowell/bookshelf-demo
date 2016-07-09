/**
 * Created by greg on 27/04/15.
 */

import Knex from 'knex';
import Bookshelf from 'bookshelf';
import Config from '../knexfile';


const bookshelf = new Bookshelf(new Knex(Config.development));

// enable Bookshelf plugins
bookshelf.plugin('registry');
/*bookshelf.plugin('virtuals');
 bookshelf.plugin('visibility');*/

export default bookshelf;
