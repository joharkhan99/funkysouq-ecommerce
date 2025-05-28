import { CATEGORIES } from "@/data";
import { NextApiRequest, NextApiResponse } from "next";

// this will ahndle the categories routes
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // mak sure only GET request is allowed here as we don't have another other requests.
  if (req.method === "GET") {
    res.status(200).json(CATEGORIES);
  }

  // send error in case wrong method
  return res.status(405).json({
    error: `Method ${req.method} not allowed!! Please use GET`,
  })
}