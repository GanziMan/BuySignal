import { NextRequest, NextResponse } from "next/server";
import { jwtVerify, SignJWT } from "jose";
import {
  ACCESS_TOKEN_EXPIRY,
  ACCESS_TOKEN_SECRET,
  DOMAIN_URL,
  REFRESH_TOKEN_EXPIRY,
  REFRESH_TOKEN_SECRET,
} from "./app/config/server";
import { JWTExpired } from "jose/errors";

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(DOMAIN_URL + "/main");
  }
  //토큰처리
  const accessToken = req.cookies.get("accessToken");
  const refreshToken = req.cookies.get("refreshToken");

  if (!accessToken?.value) {
    if (
      pathname !== "/account/signin" &&
      pathname !== "/account/signup" &&
      pathname !== "/tosspayments/success" &&
      pathname !== "/tosspayments/fail"
    ) {
      return NextResponse.redirect(DOMAIN_URL + "/account/signin");
    }
    return NextResponse.next();
  }

  try {
    await jwtVerify(accessToken.value, ACCESS_TOKEN_SECRET);
    if (pathname === "/account/signin") {
      return NextResponse.redirect(DOMAIN_URL + "/main");
    }

    if (pathname === "/account/signup") {
      return NextResponse.redirect(DOMAIN_URL + "/main");
    }
  } catch (error) {
    console.log("왜 에러");
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
        return NextResponse.redirect(DOMAIN_URL + "/account/signin");
      }
    } else {
      return NextResponse.redirect(DOMAIN_URL + "/account/signin");
    }
  }

  return NextResponse.next({ request: req });
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|site.webmainfest|favicon.ico).*)",
  ],
};
