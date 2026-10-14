import { NextResponse, type NextRequest } from "next/server";

// English is served at the root without a prefix ("/projects" renders app/[lang] with lang=en).
// Spanish keeps its "/es" prefix, and "/en/..." redirects to the unprefixed URL so each page has one address.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/es" || pathname.startsWith("/es/")) return NextResponse.next();

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals and any file with an extension (screenshots, CV, favicon...).
  matcher: ["/((?!_next/|.*\\..*).*)"],
};
