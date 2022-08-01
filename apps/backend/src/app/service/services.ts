import { likedServicesAdd, likedServicesGet } from "./liked/likedService";
import { productServices } from "./products/productsService";

export const services = {
  productServices: productServices,
  likedServices: likedServicesGet,
  likedServicesAdd,
}