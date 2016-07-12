/**
 * Created by greg on 9/07/16.
 */

import chai from 'chai';
import Models from '../../src/models/index';
import Bookshelf from 'bookshelf';

const expect = chai.expect;

describe("Models > Country", function() {

  let countries;

  before(function () {
    return Models.Country.fetchAll()
      .then(results => {
        countries = results;
        return;
      })
  });

  it("should fetchAll records", function() {
    expect(countries.length).to.equal(247);
  });

  it("should load attributes into Model instance", () => {
      expect(countries.first().attributes).contains.keys(['id', 'name', 'code'])
  });
});