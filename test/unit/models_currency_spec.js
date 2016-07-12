/**
 * Created by greg on 9/07/16.
 */

import chai from 'chai';
import Models from '../../src/models/index';
import Bookshelf from 'bookshelf';

const expect = chai.expect;

describe("Models > Currency", function() {

  let currencies;

  before(function () {
    return Models.Currency.fetchAll()
      .then(results => {
        currencies = results;
        return;
      })
  });

  it("should fetch all records", function() {
    expect(currencies.length).to.equal(86);
  });

  it("should load attributes into Model instance", () => {
      expect(currencies.first().attributes).contains.keys(['id', 'name', 'created_at', 'updated_at']);
  });
});