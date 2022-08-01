import { Router } from "express";
import { controllers } from "../../controller/controllers";

const likedProductsRouter = Router();

likedProductsRouter.get('/all', controllers.controllerGetLiked);

export default likedProductsRouter;