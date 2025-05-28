import { Cart, Category, Product } from "@/types";

export const CATEGORIES: Category[] = [
  {
    "id": 1,
    "name": "Clothing",
    "children": [
      {
        "id": 2,
        "name": "Men",
        "children": [
          { "id": 3, "name": "Shirts" },
          { "id": 4, "name": "Pants" }
        ]
      },
      {
        "id": 5,
        "name": "Women",
        "children": [
          { "id": 6, "name": "Dresses" },
          { "id": 7, "name": "Skirts" }
        ]
      }
    ]
  }
];

export const PRODUCTS: Product[] = [
  {
    productId: "product_101768768",
    name: "Classic Cotton Tee",
    description: "A soft, breathable cotton t-shirt in classic white.",
    imageUrl: "https://cdn.pixabay.com/photo/2025/05/23/11/04/arctic-fox-9617498_640.jpg",
    categoryId: 3
  },
  {
    productId: "product_555555321",
    name: "Vintage Flannel Shirt",
    description: "Comfortable vintage-style flannel shirt with a soft brushed finish.",
    imageUrl: "https://cdn.pixabay.com/photo/2025/05/23/11/04/arctic-fox-9617498_640.jpg",
    categoryId: 3
  },
  {
    productId: "product_765432123",
    name: "Slim Fit Chinos",
    description: "Comfortable slim-fit chinos, perfect for everyday wear.",
    imageUrl: "https://cdn.pixabay.com/photo/2025/05/23/11/04/arctic-fox-9617498_640.jpg",
    categoryId: 4
  },
  {
    productId: "product_987567456",
    name: "Leather Ankle Boots",
    description: "Durable leather boots for men, with a sleek finish.",
    imageUrl: "https://cdn.pixabay.com/photo/2025/05/23/11/04/arctic-fox-9617498_640.jpg",
    categoryId: 2
  },
  {
    productId: "product_09856432",
    name: "Floral Summer Dress",
    description: "Lightweight floral dress for summer outings.",
    imageUrl: "https://cdn.pixabay.com/photo/2025/05/23/11/04/arctic-fox-9617498_640.jpg",
    categoryId: 6
  },
  {
    productId: "product_987675456",
    name: "Denim Mini Skirt",
    description: "Trendy denim skirt with a washed-out look.",
    imageUrl: "https://cdn.pixabay.com/photo/2025/05/23/11/04/arctic-fox-9617498_640.jpg",
    categoryId: 7
  }
];

export const CART: Cart = {};