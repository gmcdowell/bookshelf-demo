import DB from './orm';
import Country from './country';
import City from './city';

let Continent = DB.Model.extend({
  tableName: 'continent',
  hasTimestamps:true,

  // related countries
  countries(){
    return this.hasMany(Country);
  },

  // all related cities for a continent using `through` join method
  cities(){
    return this.hasMany(City).through(Country);
  }
});

export default Continent;