export interface Product {
  title: string,
  price: number,
  image: string,
  colors: string[],
  description: string,
  manufacturer: string,
  category: string,
  sale?: number,
  id: string,
}

export interface ProductDB {
  title: string,
  price: number,
  image: string,
  colors: string,
  description: string,
  manufacturer: string,
  category: string,
  sale?: number,
  id: string,
}