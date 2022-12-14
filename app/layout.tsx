import { cookies, headers } from "next/headers";
import { notFound } from "next/navigation";

import "./globals.css";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const vercelCookie =
        cookies().get("vercel-cookie")?.value || headers().get("vercel-cookie");
    if (!vercelCookie) notFound();
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body>{children}</body>
        </html>
    );
}
