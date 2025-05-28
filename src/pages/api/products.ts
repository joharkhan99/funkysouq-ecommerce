import { PRODUCTS } from "@/data";
import { Product } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

// this will handle the /products?categoryId=? (get all items in categiry) and /products?productId=? (get single item)
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // check if get request
  if (req.method === "GET") {
    // get oth the catgeoryId and productId
    const { categoryId: rawCatId, productId: rawProdId } = req.query;

    // if user passed productId then send back the find prodyct
    if (rawProdId !== undefined) {
      const prodStr = Array.isArray(rawProdId) ? rawProdId[0] : rawProdId;
      const product = PRODUCTS.find((p: Product) => p.productId === prodStr);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      return res.status(200).json(product);
    }

    // if user sent the catgeryId, then send the items in that category
    if (rawCatId !== undefined) {
      const catStr = Array.isArray(rawCatId) ? rawCatId[0] : rawCatId;
      const categoryId = parseInt(catStr, 10);

      if (isNaN(categoryId)) {
        return res.status(400).json({ error: "Invalid categoryId" });
      }

      const filtered = PRODUCTS.filter(
        (product: Product) => product.categoryId === categoryId
      );
      return res.status(200).json(filtered);
    }
  }
}
