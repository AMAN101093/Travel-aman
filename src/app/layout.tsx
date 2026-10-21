import type { Metadata } from "next";
import { Inter, Montserrat, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Traviator Adventures & Outdoors — Be a Traviator, we'll be your Navigator",
  description: "Premium bike & backpacking expeditions across India and beyond since 2016. Ladakh, Bhutan, Spiti, Sikkim, Vietnam, Bali & more curated by Traviator.",
  keywords: ["Traviator", "Bike Tours", "Backpacking Tours", "Ladakh", "Bhutan", "Spiti", "Sikkim", "India Travel", "Adventure Tours"],
  authors: [{ name: "Traviator Adventures & Outdoors" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Traviator Adventures & Outdoors",
    description: "Be a Traviator, we'll be your Navigator. Premium expeditions across India & beyond.",
    siteName: "Traviator",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${montserrat.variable} ${bebasNeue.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
