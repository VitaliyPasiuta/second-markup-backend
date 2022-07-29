import { Router } from "express";
import productsRouter from "./products/productsRouter";

const routers = Router();

routers.use('/products', productsRouter);

export default routers;