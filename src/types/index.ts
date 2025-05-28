export interface Product {
  productId: string;
  name: string;
  description: string;
  imageUrl: string;
  categoryId: number;
}

export interface Category {
  id: number;
  name: string;
  children?: Category[]
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type Cart = Record<string, CartItem>;