
import { NextApiRequest, NextApiResponse } from "next";
import { findUser, updateUser } from "@/services/db/user";
import "@/services/firebase";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const { id } = req.query;
      const user = await findUser(id as string);
      return res.status(200).json(user);
    } catch (error: any) {
      return res.status(500).json({ message: "Method not allowed" });
    }
  }
  if (req.method === "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }
}