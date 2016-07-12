import DB from './orm';

let Continent = DB.Model.extend({
  tableName: 'continent',
  hasTimestamps:true
});

export default Continent;