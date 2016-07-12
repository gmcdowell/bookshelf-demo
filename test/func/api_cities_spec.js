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

describe("API > Cities", function() {

  it("should GET all cities", (done) => {
    request.get(`${baseUrl}/cities`)
      .expect(200)
      .expect(res => {
        expect(res.body.length).to.equal(243);
      })
      .end(err => {
        if(err) return done(err);
        done();
      })
  });

  it("should GET a continent by ID", (done) => {
    request.get(`${baseUrl}/cities/1`)
      .expect(200)
      .expect(res => {
        expect(res.body.name).to.equal('Abu Dhabi')
      })
      .end(err => {
        if(err) return done(err);
        done();
      })
  });
});