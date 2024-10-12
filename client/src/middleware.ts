import { NextRequest, NextResponse } from "next/server";

export const PUBLIC_PATHS = ["/account/login", "/account/signup"];
export default async function handler(req: NextRequest) {
  const { pathname, origin } = req.nextUrl;
  const isPublic = PUBLIC_PATHS.some((path) => pathname.startsWith(path));

  if (!isPublic) {
    //토큰처리
  }

  if (pathname === "/") {
    return NextResponse.redirect(`${origin + "/introduce"}`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|site.webmainfest|favicon.ico).*)",
  ],
};
