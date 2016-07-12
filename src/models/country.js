import DB from './orm';

let Country = DB.Model.extend({
  tableName: 'country',
  hasTimestamps:true
});

export default Country;