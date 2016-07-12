/**
 * Created by greg on 12/07/16.
 */

import chai from 'chai';
import Config from 'config';

import API from '../../src/server.js';
import Server from 'supertest';


const
  request = Server(API),
  baseUrl = Config.get('API.URL_PREFIX'),
  expect = chai.expect;

describe("API > Countries", function() {

  it("should GET all countries", (done) => {
    request.get(`${baseUrl}/countries`)
      .expect(200)
      .expect(res => {
        expect(res.body.length).to.equal(247);
      })
      .end(err => {
        if(err) return done(err);
        done();
      })
  });

  it("should GET a continent by ID", (done) => {
    request.get(`${baseUrl}/countries/1`)
      .expect(200)
      .expect(res => {
        expect(res.body.name).to.equal('Afghanistan')
      })
      .end(err => {
        if(err) return done(err);
        done();
      })
  });
});