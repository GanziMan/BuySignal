"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function signOut() {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
  revalidatePath("/");
  throw redirect("/account/signin");
}
