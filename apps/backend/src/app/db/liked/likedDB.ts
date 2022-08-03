import * as likedData from '../../../../mock/liked.json';
import { Product } from '../../../types/product';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export const likedDB = async (): Promise<Product[]> => {
  try {
    return await getData();
  } catch (e) {
    throw new Error(`likedDB: ${e}`);
  }
}

async function getData(): Promise<Product[]> {
  const liked: Product[] = likedData;
  return liked;
}

export const likedAddBD = async (productArgument: Product) => {
  const likedAdd = async () => {
    const colorsArray = productArgument.colors;
    return await prisma.product.create({
      data: {
        id: productArgument.id,
        title: productArgument.title,
        price: productArgument.price,
        image: productArgument.image,
        colors: `${colorsArray[0]},${colorsArray[1]},${colorsArray[2]},${colorsArray[3]}`,
        description: productArgument.description,
        manufacturer: productArgument.manufacturer,
        category: productArgument.category,
        sale: productArgument.sale,
      }
    });
    // console.log(typeof product[0]);

  }

  likedAdd()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })
}

export const likedGetAllDB = async () => {
  const likedGetAll = async () => {
    const products = await prisma.product.findMany();
    return products;
  }
  return await likedGetAll()
    .then(async (data) => {
      await prisma.$disconnect();
      return data;
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })

}