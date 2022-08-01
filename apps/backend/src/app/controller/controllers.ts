import { controllerGetLiked } from "./likedProducts/likedProductsController";
import { controllerGetProducts } from "./products/productControllers";


export const controllers = {
  productControllers: controllerGetProducts,
  controllerGetLiked: controllerGetLiked,
}