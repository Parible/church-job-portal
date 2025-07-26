// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";

// export async function middleware(req: NextRequest) {
//   const res = NextResponse.next();
//   const supabase = createServerComponentClient({ cookies });

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   const pathname = req.nextUrl.pathname;

//   // Public routes – always allowed
//   if (
//     pathname.startsWith("/signin") ||
//     pathname === "/" ||
//     pathname.startsWith("/jobs")
//   ) {
//     return res;
//   }

//   // Unauthenticated
//   if (!user) {
//     return NextResponse.redirect(new URL("/signin", req.url));
//   }

//   const role = user.user_metadata?.role;

//   // Employer-only routes
//   if (pathname.startsWith("/post-job") && role !== "employer") {
//     return NextResponse.redirect(new URL("/unauthorized", req.url));
//   }

//   // Admin-only routes
//   if (pathname.startsWith("/admin") && role !== "admin") {
//     return NextResponse.redirect(new URL("/unauthorized", req.url));
//   }

//   return res;
// }

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

// export async function middleware(req: NextRequest) {
//   const res = NextResponse.next();

//   const supabase = createMiddlewareClient({ req, res });

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   const pathname = req.nextUrl.pathname;

//   // Public pages
//   if (
//     pathname === "/" ||
//     pathname.startsWith("/signin") ||
//     pathname.startsWith("/jobs")
//   ) {
//     return res;
//   }

//   if (!user) {
//     return NextResponse.redirect(new URL("/signin", req.url));
//   }

//   const role = user.user_metadata?.role;

//   // Employer-only
//   if (pathname.startsWith("/post-job") && role !== "employer") {
//     return NextResponse.redirect(new URL("/unauthorized", req.url));
//   }

//   // Admin-only
//   if (pathname.startsWith("/admin") && role !== "admin") {
//     return NextResponse.redirect(new URL("/unauthorized", req.url));
//   }

//   return res;
// }

// export const config = {
//   matcher: ["/post-job", "/admin/:path*", "/dashboard/:path*"],
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = req.nextUrl.pathname;

  const PUBLIC_PATHS = ["/", "/signin", "/jobs"];

  // Allow public routes
  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    return res;
  }

  // Not signed in
  if (!user) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  const role = user.user_metadata?.role;

  // Admin can access everything
  if (role === "admin") return res;

  // Employer-only routes
  if (pathname.startsWith("/post-job") && role !== "employer") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  if (pathname.startsWith("/dashboard") && role !== "employer") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  // Job seeker should not access post-job or dashboard
  if (
    pathname.startsWith("/post-job") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/dashboard")
  ) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return res;
}

export const config = {
  matcher: [
    "/post-job",
    "/admin/:path*",
    "/admin/dashboard/:path*",
    "/api/admin/:path*",
    // Optionally protect more private routes here
  ],
};
