import { likedServicesAdd, likedServicesDelete, likedServicesGet } from "./liked/likedService";
import { cartServicesAdd, cartServicesDelete, cartServicesGet } from "./cart/cartService";
import { productServices } from "./products/productsService";

export const services = {
  productServices,
  likedServicesGet,
  likedServicesAdd,
  likedServicesDelete,
  cartServicesGet,
  cartServicesAdd,
  cartServicesDelete,
}