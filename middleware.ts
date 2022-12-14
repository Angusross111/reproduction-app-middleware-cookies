// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const cookie = req.cookies.get("vercel-cookie")?.value;
    console.log("middleware:cookie", cookie);
    if (cookie) return NextResponse.next();
    const response = NextResponse.next();
    response.cookies.set("vercel-cookie", "cookie-data", { maxAge: 30 });
    console.log("response", response);
    return response;
}
