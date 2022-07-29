import {db} from '../../db/db';

describe("controler", ()=> {
  it('controler it', ()=>{
    console.log(db);
    
    expect(1 + 2).toBe(3);
  });

});