import DB from './base_model';

let Currency = DB.Model.extend({
  tableName: 'currency',
  hasTimestamps:true
});

export default Currency;