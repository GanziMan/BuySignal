import { NextRequest, NextResponse } from "next/server";
import { jwtVerify, SignJWT } from "jose";
import {
  ACCESS_TOKEN_EXPIRY,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRY,
  REFRESH_TOKEN_SECRET,
} from "./app/config/server";
import { JWTExpired } from "jose/errors";
export const PUBLIC_PATHS = ["/account/login", "/account/signup"];
export default async function middleware(req: NextRequest) {
  const { pathname, origin } = req.nextUrl;
  const isPublic = PUBLIC_PATHS.some((path) => pathname.startsWith(path));

  if (!isPublic) {
    //토큰처리
    const accessToken = req.cookies.get("accessToken");
    const refreshToken = req.cookies.get("refreshToken");

    if (accessToken?.value == null) {
      return NextResponse.redirect("/account/signin");
    }

    try {
      await jwtVerify(accessToken.value, ACCESS_TOKEN_SECRET);
    } catch (error) {
      if (error instanceof JWTExpired && refreshToken?.value != null) {
        try {
          const verified = await jwtVerify(
            refreshToken.value,
            REFRESH_TOKEN_SECRET
          );
          const newAccessToken = await new SignJWT(verified.payload)
            .setProtectedHeader({ alg: "HS256", typ: "JWT" })
            .setIssuedAt()
            .setExpirationTime(ACCESS_TOKEN_EXPIRY)
            .sign(ACCESS_TOKEN_SECRET);

          const newRefreshToken = await new SignJWT(verified.payload)
            .setProtectedHeader({ alg: "HS256", typ: "JWT" })
            .setIssuedAt()
            .setExpirationTime(REFRESH_TOKEN_EXPIRY)
            .sign(REFRESH_TOKEN_SECRET);

          req.cookies.set("accessToken", newAccessToken);
          req.cookies.set("refreshToken", newRefreshToken);

          const res = NextResponse.next({ request: req });
          res.cookies.set("accessToken", newAccessToken);
          res.cookies.set("refreshToken", newRefreshToken);

          return res;
        } catch (error) {
          return NextResponse.redirect("/account/signin");
        }
      } else {
        return NextResponse.redirect("/account/signin");
      }
    }
  }

  // if (pathname === "/") {
  //   return NextResponse.redirect(`${origin + "/signin"}`);
  // }

  return NextResponse.next({ request: req });
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|site.webmainfest|favicon.ico).*)",
  ],
};
