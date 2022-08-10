import { controllerAddLiked, controllerDeleteLiked, controllerGetLiked } from "./likedProducts/likedProductsController";
import { controllerAddCart, controllerDeleteCart, controllerGetCart } from "./cart/cartController";
import { controllerGetProducts } from "./products/productControllers";


export const controllers = {
  controllerGetProducts,
  controllerGetLiked,
  controllerAddLiked,
  controllerDeleteLiked,
  controllerGetCart,
  controllerAddCart,
  controllerDeleteCart,
}