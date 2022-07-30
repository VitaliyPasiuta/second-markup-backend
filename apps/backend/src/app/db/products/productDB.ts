import * as productsData from '../../../../mock/products.json';
import { Product } from '../../../types/product';

export const productDB = async (): Promise<Product[]> => {
  try{
    return await getData();
  }
  catch(e){
    throw new Error(`productDB: ${e}`);
  }
}

async function getData(): Promise<Product[]>{
  const product: Product[] = productsData;
  return product;
}