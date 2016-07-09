/**
 * Created by greg on 9/07/16.
 */

import chai from 'chai';
import Models from '../../src/models/index';
import Bookshelf from 'bookshelf';

const expect = chai.expect;

describe("Models > Continent", function() {

  it("should instantiate a Continent Model", function() {
    expect(new Models.Continent).to.be.instanceOf(Bookshelf.Model);
  });
});