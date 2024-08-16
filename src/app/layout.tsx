import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Jarek Olszewski | Fotograf Siedlce | Fotografia",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
            <body
                className={`${inter.className} bg-background-primary flex flex-col min-h-screen text-foreground-secondary w-full overflow-x-hidden`}
            >
                <Header />
                {/* <Background /> */}
                <main className="flex-1">{children}</main>
                {/* <Footer /> */}
            </body>
        </html>
    );
}
