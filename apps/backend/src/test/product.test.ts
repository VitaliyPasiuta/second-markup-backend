import { db } from '../app/db/db';
import * as request from 'supertest';
import { Express } from 'express-serve-static-core'


import { createServer } from '../utils/server';

let server: Express

beforeAll(async () => {
  server = await createServer(true);
})

describe('product tests: ', () => {
  let productsData;
  async function getData() {
    await db.productDB().then((data) => productsData = data); 
  }
  it('products should\'t be empty', async () => {
    await getData();
    expect(JSON.stringify(productsData)).not.toBe(undefined && null && 'undefined' && 'null' && '[]' && '{}');
    });

  it('should return 200 & valid response if request param list is empty', done => {
    request(server)
      .get(`/api/products/all`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).toStrictEqual(productsData);
        done()
      })
  })
});