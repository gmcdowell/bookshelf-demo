import DB from './orm';

let City = DB.Model.extend({
  tableName: 'city',
  hasTimestamps:true
});

export default City;