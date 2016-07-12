/**
 * Created by greg on 9/07/16.
 */

import chai from 'chai';
import Models from '../../src/models/index';

const expect = chai.expect;

describe("Models > City", function() {

  let cities;

  before(function () {
    return Models.City.fetchAll()
      .then(results => {
        cities = results;
        return;
      })
  });

  it("should instantiate a City Model", function() {
    expect(cities.length).to.equal(243);
  });

  it("should load attributes into Model instance", () => {
      expect(cities.at(0).attributes).contains.keys(['id', 'name', 'population', 'gps_coordinates', 'is_capital', 'country_id'])
  });
});