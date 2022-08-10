import { Product, ProductDB } from "../../../types/product";
import { db } from "../../db/db";
import { services } from "../services";

export const likedServicesGet = async (): Promise<Product[]> => {
  try {
    const allProductsBuffer: ProductDB[] = await db.likedGetAllDB();
    const products: Product[] = allProductsBuffer.map((product) => {
      const bufferColors: Array<string> = product.colors.split(',');
      const productCopy: Product = { // convert DB data to necessary data
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

export const likedServicesAdd = async (id: string) => {
  try {
    const products: Product[] = await likedServicesGet();
    const allProducts: Product[] = await services.productServices();
    const curentProduct: Product = allProducts.find((product) => product.id === id);
    if (curentProduct === undefined || products.find((product: Product) => product.id === curentProduct.id)) {
      return
    }

    await db.likedAddBD(curentProduct);    
  }
  catch (e) {
    throw new Error(e);
  }
}

export const likedServicesDelete = async (id: string) => {
  try{
    const allProduct: ProductDB[] = await db.likedGetAllDB();
    if(!allProduct.find((product: ProductDB)=> product.id === id)){
      return;
    }
    await db.likedDeleteDB(id);
    
  }
  catch(e) {
    throw new Error(e);
  }
}