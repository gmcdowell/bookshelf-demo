/**
 * Created by greg on 9/07/16.
 */

import chai from 'chai';
import Models from '../../src/models/index';
import Bookshelf from 'bookshelf';

const expect = chai.expect;

describe("Models > Currency", function() {

  it("should instantiate a Currency Model", function() {
    expect(new Models.Currency).to.be.instanceOf(Bookshelf.Model);
  });
});