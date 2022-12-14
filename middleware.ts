// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const cookie = req.cookies.get("vercel-cookie")?.value;
    if (cookie) return NextResponse.next();

    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("vercel-cookie", "cookie-data");

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });

    response.cookies.set("vercel-cookie", "cookie-data", { maxAge: 30 });
    return response;
}
