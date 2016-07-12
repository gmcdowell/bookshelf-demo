/**
 * Created by greg on 9/07/16.
 */

import chai from 'chai';
import Models from '../../src/models/index';

const expect = chai.expect;

describe("Models > Government", function() {

  let governments;

  before(function () {
    return Models.Government.fetchAll()
      .then(results => {
        governments = results;
        return;
      })
  });

  it("should fetchAll records", function() {
    expect(governments.length).to.equal(32);
  });

  it("should load all attributes into the Model instance", function(){
    expect(governments.at(0).attributes).contains.keys(['id', 'name', 'created_at', 'updated_at'])
  });
});