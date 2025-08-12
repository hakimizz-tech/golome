export interface NewsItem {
  id: number;
  imageUrl: string;
  event: string;
  title: string;
  description: string;
  className: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}