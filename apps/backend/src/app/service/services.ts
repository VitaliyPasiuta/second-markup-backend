import { likedServicesAdd, likedServicesDelete, likedServicesGet } from "./liked/likedService";
import { productServices } from "./products/productsService";

export const services = {
  productServices,
  likedServicesGet,
  likedServicesAdd,
  likedServicesDelete,
}