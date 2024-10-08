import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";

let locales = ["en", "ar"];
let defaultLocale = "en";
const getLocale = (request: NextRequest) => {
  let headers = {
    "accept-language": request.headers.get("accept-language") ?? "en-US",
  };
  if (headers) {
    let languages = new Negotiator({ headers }).languages();
    return match(languages, locales, defaultLocale);
  } else {
    return defaultLocale;
  }
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/pdf")) return;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|static|.*\\..*).*)",
  ],
};
