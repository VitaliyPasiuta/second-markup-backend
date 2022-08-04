import { Router } from "express";
import { controllers } from "../../controller/controllers";

const likedProductsRouter = Router();

likedProductsRouter.get('/all', controllers.controllerGetLiked);
likedProductsRouter.post('/add/:id', controllers.controllerAddLiked);
likedProductsRouter.delete('/delete/:id', controllers.controllerDeleteLiked);

export default likedProductsRouter;