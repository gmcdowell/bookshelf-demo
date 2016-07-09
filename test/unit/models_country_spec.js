/**
 * Created by greg on 9/07/16.
 */

import chai from 'chai';
import Models from '../../src/models/index';
import Bookshelf from 'bookshelf';

const expect = chai.expect;

describe("Models > Country", function() {

  it("should instantiate a Book Model", function() {
    expect(new Models.Country).to.be.instanceOf(Bookshelf.Model);
  });
});