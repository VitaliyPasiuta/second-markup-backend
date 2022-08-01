import { Product } from "../../../types/product";
import { db } from "../../db/db";
import { writeFile } from "fs/promises";
import { services } from "../services";
import { writeFileCastom } from "../../../utils/writeFileCastom";
import path = require("path");

export const likedServicesGet = async (): Promise<Product[]> => {
  try {
    let products: Product[];
    await db.likedDB().then((curentProduct) => products = curentProduct);
    return products;
  }
  catch (e) {
    throw new Error(e);
  }
}

export const likedServicesAdd = async (id: string): Promise<void> => {
  try {
    const products: Product[] = await likedServicesGet();
    const allProducts: Product[] = await services.productServices();
    const curentProduct: Product = allProducts.find((product) => product._id === id);
    if (products.find((product)=> product._id === curentProduct._id)) { 
      console.log(curentProduct);
      
      return
    }
    products.push(curentProduct);
    console.log("All work");
    
    // await writeFileCastom('./../../../../mock/liked.json', JSON.stringify(products))
    await writeFile(path.resolve(__dirname, '/mock/liked.json'), JSON.stringify(products))
    // path.resolve(__dirname, '../mock/liked.json');  
  }
  catch (e) {
    throw new Error(e);
  }
}