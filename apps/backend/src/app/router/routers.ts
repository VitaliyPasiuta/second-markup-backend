import { Router } from "express";
import likedProductsRouter from "./likedProducts/likedProductsRouter";
import productsRouter from "./products/productsRouter";
import cartRouter from "./cart/cartRouter";

const routers = Router();

routers.use('/products', productsRouter);
routers.use('/liked', likedProductsRouter);
routers.use('/cart', cartRouter)

export default routers;