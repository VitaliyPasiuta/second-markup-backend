import { Product } from "../../../types/product";
import { db } from "../../db/db";
import { writeFile } from "fs/promises";
import { services } from "../services";
import path = require("path");

export const likedServicesGet = async (): Promise<Product[]> => {
  try {
    const allProductsBuffer = await db.likedGetAllDB();    
    const products: Product[] = allProductsBuffer.map((product) => {
      const bufferColors = product.colors.split(',');
      const productCopy = { // convert DB data to necessary data
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        colors: bufferColors,
        description: product.description,
        manufacturer: product.manufacturer,
        category: product.category,
        sale: product.sale,
      }
      return productCopy;
    });    
    return products;
  }
  catch (e) {
    throw new Error(e); 
  }
}

export const likedServicesAdd = async (id: string): Promise<void> => { // TODO: Delete old solution
  try {
    const products: Product[] = await likedServicesGet();
    const allProducts: Product[] = await services.productServices();
    const curentProduct: Product = allProducts.find((product) => product.id === id);
    if (products.find((product)=> product.id === curentProduct.id)) { 
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