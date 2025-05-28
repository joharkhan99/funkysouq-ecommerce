import { CART, PRODUCTS } from "@/data";
import { NextApiRequest, NextApiResponse } from "next";

// I initially added this because I wanted to implement the whole frontend/backend cart system but then I read your document and i said only mocked cart. so I only implemented the frtontend redux cart.

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET": {
      return res.status(200).json(CART);
    }
    case "POST": {
      const { productId } = req.body;
      const product = PRODUCTS.find(p => p.productId === productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      CART[productId] = { quantity: 1, product };
      return res.status(200).json({ item: CART[productId] });
    }
    case "PUT": {
      const { productId, type } = req.body;
      if (!CART[productId]) {
        return res.status(404).json({ error: 'Item not in cart' })
      }

      if (type === "increment") {
        CART[productId].quantity += 1;
      } else if (type === "decrement") {
        if (CART[productId].quantity <= 0) {
          delete CART[productId];
        } else {
          CART[productId].quantity -= 1;
        }
      }
      return res.status(200).json({ item: CART[productId] });
    }
    case "DELETE": {
      const { productId } = req.body;
      if (!CART[productId]) {
        return res.status(404).json({ error: 'Item not in cart' })
      }

      delete CART[productId];
      return res.status(200).json({ message: 'Item removed from Cart!' })
    }
  }
}