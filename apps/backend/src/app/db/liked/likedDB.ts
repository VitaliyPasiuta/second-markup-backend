import { Product, ProductDB } from '../../../types/product';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export const likedAddBD = async (productArgument: Product): Promise<void> => {
  const likedAdd = async () => {
    const colorsArray: string[] = productArgument.colors;
    return await prisma.productLiked.create({
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
  }

  likedAdd()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e: Error) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })
}

export const likedGetAllDB = async (): Promise<ProductDB[]> => {
  const likedGetAll = async (): Promise<ProductDB[]> => {
    const products: ProductDB[] = await prisma.productLiked.findMany();
    return products;
  }
  return await likedGetAll()
    .then(async (data: ProductDB[]) => {
      await prisma.$disconnect();
      return data;
    })
    .catch(async (e: Error) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })
}

export const likedDeleteDB = async (idArgument: string): Promise<ProductDB> => {
  const likedDelete = async (): Promise<ProductDB> => {
    const product: ProductDB = await prisma.productLiked.delete({
      where: {
        id: idArgument,
      }
    })
    return product;
  }

  return await likedDelete()
    .then(async (data: ProductDB) => {
      await prisma.$disconnect();
      return data;
    })
    .catch(async (e: Error) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })
}