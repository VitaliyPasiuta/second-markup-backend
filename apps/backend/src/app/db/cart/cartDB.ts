import { Product, ProductDB } from '../../../types/product';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export const cartAddBD = async (productArgument: Product): Promise<void> => {
  const cartAdd = async () => {
    const colorsArray: string[] = productArgument.colors;
    return await prisma.cart.create({
      data: {
        id: productArgument.id,
        title: productArgument.title,
        price: productArgument.price,
        image: productArgument.image,
        colors: `${colorsArray[0]},${colorsArray[1]},${colorsArray[2]},${colorsArray[3]},${colorsArray[4]}`,
        description: productArgument.description,
        manufacturer: productArgument.manufacturer,
        category: productArgument.category,
        sale: productArgument.sale,
      }
    });
  }

  cartAdd()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e: Error) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })
}

export const cartGetAllDB = async (): Promise<ProductDB[]> => {
  const cartGetAll = async (): Promise<ProductDB[]> => {
    const products: ProductDB[] = await prisma.cart.findMany();
    return products;
  }
  return await cartGetAll()
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

export const cartDeleteDB = async (idArgument: string): Promise<ProductDB> => {
  const cartDelete = async (): Promise<ProductDB> => {
    const product: ProductDB = await prisma.cart.delete({
      where: {
        id: idArgument,
      }
    })
    return product;
  }

  return await cartDelete()
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