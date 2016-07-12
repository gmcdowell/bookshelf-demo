import DB from './orm';

let Government = DB.Model.extend({
  tableName: 'government',
  hasTimestamps:true
});

export default Government;