import { Router } from "express";
import likedProductsRouter from "./likedProducts/likedProductsRouter";
import productsRouter from "./products/productsRouter";

const routers = Router();

routers.use('/products', productsRouter);
routers.use('/liked', likedProductsRouter)

export default routers;