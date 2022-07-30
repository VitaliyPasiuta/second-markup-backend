import { Product } from "../../../types/product";
import { db } from "../../db/db";

export const productServices = async (): Promise<Product[]>=> {
  try{
    let products: Product[];
    await db.productDB().then((curentProduct)=> products = curentProduct);
    return products;
  }
  catch(e){    
    throw new Error(e);
  }
}