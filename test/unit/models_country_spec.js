/**
 * Created by greg on 9/07/16.
 */

import chai from 'chai';
import Models from '../../src/models/index';

const expect = chai.expect;

describe.only("Models > Country", function() {

  let countries;

  before(function () {
    return Models.Country.fetchAll({withRelated: ['cities']})
      .then(results => {
        countries = results;
        return;
      })
  });

  it("should fetchAll records", function() {
    expect(countries.length).to.equal(247);
  });

  it("should load attributes into Model instance", () => {
      expect(countries.first().attributes).contains.keys(['id', 'name', 'code', 'population', 'area', 'coastline',
        'phone_prefix', 'currency_code', 'birth_rate', 'death_rate', 'life_expectancy', 'currency_id', 'continent_id',
        'government_id', 'created_at', 'updated_at']);
  });

  it("should load related cities", () => {
      expect(countries.first().related('cities').length).to.be.gte(1);
  });

  it("should load the capital city", () => {
    return countries.first().load(['capital'])
      .then(c => {
        expect(c.related('capital').get('is_capital')).to.equal(true);
      })
  });
});