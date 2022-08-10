import { Product, ProductDB } from "../../../types/product";
import { db } from "../../db/db";
import { services } from "../services";

export const cartServicesGet = async (): Promise<Product[]> => {
  try {
    const allProductsBuffer: ProductDB[] = await db.cartGetAllDB();
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

export const cartServicesAdd = async (id: string) => {
  try {
    const products: Product[] = await cartServicesGet();
    const allProducts: Product[] = await services.productServices();
    const curentProduct: Product = allProducts.find((product) => product.id === id);
    if (curentProduct === undefined || products.find((product: Product) => product.id === curentProduct.id)) {
      return
    }

    await db.cartAddBD(curentProduct);    
  }
  catch (e) {
    throw new Error(e);
  }
}

export const cartServicesDelete = async (id: string) => {
  try{
    const allProduct: ProductDB[] = await db.cartGetAllDB();
    if(!allProduct.find((product: ProductDB)=> product.id === id)){
      return;
    }
    await db.cartDeleteDB(id);
    
  }
  catch(e) {
    throw new Error(e);
  }
}