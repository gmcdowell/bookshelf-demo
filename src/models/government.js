import DB from './base_model';

let Government = DB.Model.extend({
  tableName: 'government',
  hasTimestamps:true
});

export default Government;