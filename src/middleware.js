// import { NextRequest, NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";

// export default function middleware(req) {
//     const token = await getToken({req})
//     const isAuthenticated = !!token
//     const isDashboardPage = req.nextUrl.pathname.startsWith("/dashboard")

//     if(isDashboardPage && !isAuthenticated) {
//         return NextResponse.redirect(new URL("api/auth/signin",req.url))
//     }

// }

// middleware.js
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  const token = await getToken({ req });
  const isAuthenticated = !!token;
  const isDashboardPage = req.nextUrl.pathname.startsWith('/dashboard');

  if (isDashboardPage && !isAuthenticated) {
    return NextResponse.redirect(new URL('/api/auth/signin', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
};
