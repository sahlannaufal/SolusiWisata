'use client'

import { NextResponse } from "next/server";
import { getTokenUserFromLocalStorage } from "./utils/TokenManager"

export function middleware(request) {
    const token = getTokenUserFromLocalStorage();
    
    const {pathname} = new URL(request.url);
    let isLogin = false;
    if (token) {
        isLogin = true;
    }

    if (pathname.startsWith("/auth") && token) {
        return NextResponse.redirect(new URL("/", request.url).toString());
    }

    if (pathname.startsWith("/admin") && !token) {
        return NextResponse.redirect(
            new URL("/auth/login", request.url).toString()
        );
    }

    return NextResponse.next();
}