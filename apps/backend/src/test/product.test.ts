import { db } from '../app/db/db';
import * as request from 'supertest';
import { Express } from 'express-serve-static-core'
import { Server } from "http";


import { createServer } from '../utils/server';

let app: Express;
let server: Server;

beforeAll(async () => {
  const serverBoofer = await createServer(true);
  app = serverBoofer.app;
  server = serverBoofer.server;
  // server = (await createServer(true)).app;
}); 

afterAll( async () => {
  server.close();
  // serverVariable = (await createServer(true)).server;
  // serverVariable.close();
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
    request(app)
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