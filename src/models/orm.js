/**
 * Created by greg on 27/04/15.
 */

import Knex from 'knex';
import Bookshelf from 'bookshelf';
import Config from '../../knexfile';

const Orm = new Bookshelf(new Knex(Config.development));

// enable Bookshelf plugins
Orm.plugin('registry');
Orm.plugin('virtuals');
Orm.plugin('visibility');

export default Orm;
