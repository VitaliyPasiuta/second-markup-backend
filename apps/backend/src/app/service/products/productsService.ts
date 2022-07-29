import { db } from "../../db/db";

export const productServices = async ()=> {
  try{
    let products;
    await db.productDB().then((curentProduct)=> products = curentProduct);
    return products;
  }
  catch(e){    
    throw new Error(e);
  }
}

const data =  // mock data
  {prod: 'product'};