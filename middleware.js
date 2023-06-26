import { NextResponse } from "next/server";
import { isAuth } from "./app/lib/auth";
export function middleware(request) {
  if (!isAuth(request.cookies)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
//Config değişkeni ayarlamazsan, Middleware tüm routelardacalısır bundan dolayı belirle.
//pages/about istek geldiğinde login e yönlendirilir.
export const config = {
  matcher: "/pages/about",
  //matcher: ["/pages/about","/pages/blog"],
};
