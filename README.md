# FunkySouq E-commerce Frontend

A minimal Next.js e-commerce frontend with nested categories, product listings, product details, and cart functionality.

## Features

- View nested categories (up to 3 levels deep)
- Category pages showing products in that category
- Product details pages
- Add-to-cart buttons on product detail and product listing pages
- Cart page with:
  - Increase/Decrease quantity
  - Remove individual items
  - Clear entire cart

## Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <repo-url>
   ```

2. **Navigate into the project**

   ```bash
   cd <project-folder>
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to see the app.

## Project Structure

- **`src/pages/`**

  - API routes: `/api/categories`, `/api/products`, `/api/cart`
  - Frontend pages: `index.tsx` (home), `cart/index.tsx`, `products/[productId]/index.tsx`, `products/index.tsx`

- **`src/data/`**

  - Sample `CATEGORIES`, `PRODUCTS`

- **`src/components/`**

  - Reusable UI: `Layout`, `Header`, `CategoryList`, `ProductCard`, `AddToCartButton`

- **`src/types/`**

  - TypeScript interfaces for `Category` and `Product`

- **`src/store/`**

  - Redux Toolkit slice for cart management (`cartSlice.ts`)

## Comments & Documentation

- Important logic and explanations are commented inline in each file.

## Troubleshooting

If you encounter any issues with setup or running the app. Feel free to reach me out if you need help.

Peace ✌️
