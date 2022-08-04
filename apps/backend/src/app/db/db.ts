import { likedAddBD, likedDeleteDB, likedGetAllDB } from "./liked/likedDB";
import { productDB } from "./products/productDB";

export const db = {
  productDB,
  likedAddBD,
  likedGetAllDB,
  likedDeleteDB,
} 