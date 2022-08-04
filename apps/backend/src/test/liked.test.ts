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

  async function getProdust() {
    productData = await services.productServices();
  }

  async function getData() {
    likedData = await services.likedServicesGet();
  }
  async function getDataDB() {
    likedDataDB = await db.likedGetAllDB();
  }

  function getNewProduct(){
    for(let i = 0; i < productData.length; i++){
      const currentProduct: Product | undefined = likedData.find((product)=> productData[i].id === product.id)
      console.log(currentProduct);
      
      if(!currentProduct) {
        return productData[i]; 
      }
    }
    return productData[0];
  }

  it('get liked data: ', async () => {
    await getData();
    await getDataDB();
    await getProdust();
  })
  it('body must have all liked product: ', done => {
    request(app)
      .get(`/api/liked/all`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).toStrictEqual(likedData);
        done();
      })
  })
  it('body should have difference with liked product from DB layer due to diferent types', done => {
    request(app)
    .get(`/api/liked/all`)
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) return done(err)
      expect(res.body).not.toStrictEqual(likedDataDB);
      done();
    })
  })
  //!!! add test to remove full liked
  // it('liked add must add new product', done => {
  //   const product: Product = getNewProduct();
  //   console.log("Product: ", product);
    
  //   request(app)
  //   .post(`/api/liked/add/${product.id}`)
  //   .expect('Content-Type', "text/plain; charset=utf-8")
  //   .expect(200)
  //   .end((err, res) => {
  //     if (err) return done(err);
  //     done();
  //   });
  //   request(app)
  //   .get(`/api/liked/all`)
  //   .expect('Content-Type', /json/)
  //   .expect(200)
  //   .end((err, res) => {
  //     if (err) return done(err)
  //     const result = res.body   //.find((prod: Product) => prod.id === product.id);
  //     console.log("Result: ", result);
      
  //     expect(result).toBe(product);
  //     done();
  //   })

  // })

})