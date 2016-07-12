import DB from './orm';

let Currency = DB.Model.extend({
  tableName: 'currency',
  hasTimestamps:true
});

export default Currency;