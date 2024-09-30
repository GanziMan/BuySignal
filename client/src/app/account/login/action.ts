// pages/api/user.ts
import redis from "@/lib/redis";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  user?: {
    name: string;
    email: string;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  switch (method) {
    case "POST": {
      const { userId, name, email } = req.body;

      if (!userId || !name || !email) {
        return res
          .status(400)
          .json({ message: "Missing fields in request body" });
      }

      // Redis에 사용자 데이터를 해시로 저장
      await redis.hmset(`user:${userId}`, { name, email });

      res.status(200).json({ message: "User added successfully" });
      break;
    }

    case "GET": {
      const { id } = req.query;

      if (!id || typeof id !== "string") {
        return res.status(400).json({ message: "Missing or invalid user ID" });
      }

      // Redis에서 사용자 데이터 가져오기
      const user = await redis.hgetall(`user:${id}`);

      if (Object.keys(user).length === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      //   res.status(200).json({ message: 'User found', user });
      break;
    }

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).json({ message: `Method ${method} not allowed` });
  }
}
