import { likedAddBD, likedDB, likedDeleteDB, likedGetAllDB } from "./liked/likedDB";
import { productDB } from "./products/productDB";

export const db = {
  productDB: productDB,
  likedDB,
  likedAddBD,
  likedGetAllDB,
  likedDeleteDB,
} 