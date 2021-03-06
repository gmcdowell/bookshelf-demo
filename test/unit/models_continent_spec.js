/**
 * Created by greg on 9/07/16.
 */

import chai from 'chai';
import Models from '../../src/models/index';

const expect = chai.expect;

describe("Models > Continent", function() {

  let continents;

  before(function () {
    return Models.Continent.fetchAll({withRelated: ['countries', 'cities']})
      .then(results => {
        continents = results;
        return;
      })
  });

  it("should instantiate a Continent Model", function() {
    expect(continents.length).to.equal(10);
  });

  it("should load all attributes into the Model instance", function(){
    expect(continents.at(0).attributes).contains.keys(['id', 'name', 'created_at', 'updated_at'])
  });
  
  it("should load each continents\'s related countries", () => {
      expect(continents.first().related('countries').length).to.be.gte(1);
  });

  it("should load all cities of all related countries ", () => {
      expect(continents.first().related('cities').length).to.be.gte(1);
  });
});