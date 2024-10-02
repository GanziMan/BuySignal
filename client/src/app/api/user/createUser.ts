"use server";
import { Redis } from "@upstash/redis";

export default async function createUser() {
  const redis = new Redis({
    url: "https://powerful-bullfrog-24646.upstash.io",
    token: "AWBGAAIjcDE1NWMzZmY3MjUzZTg0ZDA0OGE0MDEyZDViM2IxM2E0Y3AxMA",
  });

  await redis.hset("people", { name: "joe" });
  const data = await redis.hget("people", "name");

  console.log(data);

  return {
    messege: "생성되었습니다.",
  };
}
