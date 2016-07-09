import DB from './base_model';

let Continent = DB.Model.extend({
  tableName: 'continent',
  hasTimestamps:true
});

export default Continent;