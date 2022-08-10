import { likedAddBD, likedDeleteDB, likedGetAllDB } from "./liked/likedDB";
import { cartAddBD, cartDeleteDB, cartGetAllDB } from "./cart/cartDB";
import { productDB } from "./products/productDB";

export const db = {
  productDB,
  likedAddBD,
  likedGetAllDB,
  likedDeleteDB,
  cartAddBD,
  cartGetAllDB,
  cartDeleteDB,
} 