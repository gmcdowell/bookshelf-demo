/**
 * Created by greg on 9/07/16.
 */

import chai from 'chai';
import Models from '../../src/models/index';
import Bookshelf from 'bookshelf';

const expect = chai.expect;

describe("Models > City", function() {

  it("should instantiate a City Model", function() {
    console.log(new Models.City)
    expect(new Models.City).to.be.instanceOf(Bookshelf.Model);
  });
});