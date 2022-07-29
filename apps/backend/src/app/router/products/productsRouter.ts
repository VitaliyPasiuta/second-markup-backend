import { Router } from "express";
import { controlers } from "../../controler/controlers";

const productsRouter = Router();


productsRouter.get('/all', controlers.productControlers);

export default productsRouter;