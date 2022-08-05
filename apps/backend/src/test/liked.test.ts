import { services } from '../app/service/services';
import * as request from 'supertest';
import { Express } from 'express-serve-static-core'
import { Server } from "http";
import { createServer } from '../utils/server';
import { Product, ProductDB } from '../types/product';
import { db } from '../app/db/db';

let app: Express;
let server: Server;     

beforeAll(async () => {
  const serverBoofer = await createServer(true);
  app = serverBoofer.app;
  server = serverBoofer.server;
});

afterAll(async () => {
  server.close();
})

describe('liked test: ', () => {
  let productData: Product[];
  let likedData: Product[];
  let likedDataDB: ProductDB[];
  let product: Product;

  async function getProdust() {
    productData = await services.productServices();
  }

  async function getData() {
    likedData = await services.likedServicesGet();
  }
  async function getDataDB() {
    likedDataDB = await db.likedGetAllDB();
  }

  function getNewProduct() {
    for (let i = 0; i < productData.length; i++) {
      const currentProduct: Product | undefined = likedData.find((product) => productData[i].id === product.id);

      if (!currentProduct) {
        return productData[i];
      }
    }
    return productData[0];
  }

  it('get liked data: ', async () => {
    await getData();
    await getDataDB();
    await getProdust();
  });
  it('body must have all liked product: ', done => {
    request(app)
      .get(`/api/liked/all`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toStrictEqual(likedData);
        done();
      });
  });
  it('body should have difference with liked product from DB layer due to diferent types', done => {
    request(app)
      .get(`/api/liked/all`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).not.toStrictEqual(likedDataDB);
        done();
      });
  });
  it('for the test liked storage should not be full', async () => {
    expect(true).toBe(productData.length > likedData.length);
  })
  it('liked add must add new product', done => {
    product = getNewProduct();

    request(app)
      .post(`/api/liked/add/${product.id}`)
      .expect('Content-Type', "text/plain; charset=utf-8")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  })
  it('liked must have new product', done => {
    request(app)
      .get(`/api/liked/all`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        const result = res.body.find((prod: Product) => prod.id === product.id);
        expect(result).toStrictEqual(product);
        done();
      });
  });
  it('liked delete product', done => {
    request(app)
      .delete(`/api/liked/delete/${product.id}`)
      .expect('Content-Type', "text/plain; charset=utf-8")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
  it('liked must delete new product', done => {
    request(app)
      .get(`/api/liked/all`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        const result = res.body.find((prod: Product) => prod.id === product.id);
        expect(result).toBe(undefined);
        done();
      });
  });

})