export interface ProductAPI {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
  rating: number;
}

export interface ProductAPIRating {
    rate: number;
    count: number;
}
