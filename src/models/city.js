import DB from './base_model';

let City = DB.Model.extend({
  tableName: 'city',
  hasTimestamps:true
});

export default City;