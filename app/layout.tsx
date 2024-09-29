import type { Metadata } from "next";
import { ReactLenis } from "@/lib/lenis";
import { DM_Sans } from "next/font/google";
import "@/styles/globals.css";
import { LoaderProvider } from "@/components/loader";

// If loading a variable font, you don't need to specify the font weight
const dm = DM_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-dm",
});

export const metadata: Metadata = {
    applicationName: process.env.NEXT_PUBLIC_SITE_NAME,
    title: process.env.NEXT_PUBLIC_SITE_TITLE,
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
    appleWebApp: {
        title: process.env.NEXT_PUBLIC_SITE_NAME,
        statusBarStyle: "default",
        capable: true,
    },
    openGraph: {
        type: "website",
        locale: process.env.NEXT_PUBLIC_SITE_LOCALE,
        url: process.env.NEXT_PUBLIC_SITE_URL,
        siteName: process.env.NEXT_PUBLIC_SITE_NAME,
        title: {
            default: process.env.NEXT_PUBLIC_SITE_TITLE,
            template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
        },
        description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
    },
    twitter: {
        card: "summary_large_image",
        title: {
            default: process.env.NEXT_PUBLIC_SITE_TITLE,
            template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
        },
        description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
    },
    authors: [
        {
            name: process.env.NEXT_PUBLIC_SITE_NAME,
            url: process.env.NEXT_PUBLIC_SITE_URL,
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={`${dm.variable} antialiased`}>
                <LoaderProvider>
                    <ReactLenis root options={{ wheelMultiplier: 0.5, touchMultiplier: 0.5, duration: 1 }}>
                        {children}
                    </ReactLenis>
                </LoaderProvider>
            </body>
        </html>
    );
}
