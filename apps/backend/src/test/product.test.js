// const router = require('../app/router/routers');
import {db} from '../app/db/db';

describe('product tests: ', ()=> {
  it('product router', ()=> { 
    console.log(db);
    expect(1 + 1).toBe(2);
  }); 
});