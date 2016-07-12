import DB from './orm';
import City from './city';

let Country = DB.Model.extend({
  tableName: 'country',
  hasTimestamps:true,

  // related cities
  cities(){
    return this.hasMany(City);
  },

  // specifiy extra criteria in relation
  capital(){
    return this.hasOne(City).query({where: {is_capital:true}});
  }
});

export default Country;