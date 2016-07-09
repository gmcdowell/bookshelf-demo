import DB from './base_model';

let Country = DB.Model.extend({
  tableName: 'country',
  hasTimestamps:true
});

export default Country;