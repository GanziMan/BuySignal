import { NextRequest, NextResponse } from "next/server";

const ACCESS_TOKEN_KEY = "ACCESS_TOKEN";
const REFRESH_TOKEN_KEY = "REFRESH_TOKEN";

const PRIVATE_PATHS = ["/attendances"];

export default async function handler(req: NextRequest) {
  const { pathname, origin } = req.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(`${origin + "/main"}`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
