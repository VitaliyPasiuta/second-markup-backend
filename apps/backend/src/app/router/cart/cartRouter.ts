import { Router } from "express";
import { controllers } from "../../controller/controllers";

const cartRouter = Router();

cartRouter.get('/all', controllers.controllerGetCart);
cartRouter.post('/add/:id', controllers.controllerAddCart);
cartRouter.delete('/delete/:id', controllers.controllerDeleteCart);

export default cartRouter;