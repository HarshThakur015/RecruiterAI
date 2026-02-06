import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";

export const metadata: Metadata = {
    title: "RecruiterAI - AI-Powered Recruiting Automation Platform",
    description:
        "Stop losing great candidates to slow, manual hiring processes. RecruiterAI helps you screen 250+ applications in minutes, reduce time-to-hire by 70%, and build qualified talent pipelines automatically.",
    keywords: [
        "AI recruiting",
        "hiring automation",
        "ATS",
        "applicant tracking",
        "resume screening",
        "interview scheduling",
        "HR technology",
        "talent acquisition",
    ],
    icons: {
        icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%232563EB'/><text x='50' y='70' font-family='Arial, sans-serif' font-weight='900' font-size='70' text-anchor='middle' fill='white'>R</text></svg>",
    },
    openGraph: {
        title: "RecruiterAI - Every Hire, Faster and Better",
        description:
            "AI-powered recruiting automation for modern teams. Screen candidates 10x faster.",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "RecruiterAI - AI-Powered Recruiting Automation",
        description:
            "Screen 250+ applications in minutes. Reduce time-to-hire by 70%.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            </head>
            <body className="antialiased">
                <ThemeProvider>
                    <main>{children}</main>
                </ThemeProvider>
            </body>
        </html>
    );
}
