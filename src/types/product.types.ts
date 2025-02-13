interface ICategory {
  id: number;
  name: string;
  image: string;
}

export interface IProductBox {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ICategory;
  images: string[];
}