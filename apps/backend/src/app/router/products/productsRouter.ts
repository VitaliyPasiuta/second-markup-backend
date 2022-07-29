import { Router } from "express";
import { controllers } from "../../controller/controllers";

const productsRouter = Router();


productsRouter.get('/all', controllers.productControllers);

export default productsRouter;