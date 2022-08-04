import { controllerAddLiked, controllerDeleteLiked, controllerGetLiked } from "./likedProducts/likedProductsController";
import { controllerGetProducts } from "./products/productControllers";


export const controllers = {
  controllerGetProducts,
  controllerGetLiked,
  controllerAddLiked,
  controllerDeleteLiked,
}