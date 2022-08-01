import * as likedData from '../../../../mock/liked.json';
import { Product } from '../../../types/product';

export const likedDB = async ():  Promise<Product[]>=>{
  try{
    return await getData();
  }catch(e){
    throw new Error(`likedDB: ${e}`);
  }
}

async function getData(): Promise<Product[]>{
  const liked: Product[] = likedData;
  return liked; 
} 