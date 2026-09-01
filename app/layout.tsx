import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://chamillionremodeling.com'),

  title: 'Chamillion Remodeling',

  description:
    'Professional remodeling services with clean finishes and reliable results.',

  icons: {
    icon: '/icon.png',
  },

  openGraph: {
    title: 'Chamillion Remodeling',
    description:
      'Professional remodeling services with clean finishes and reliable results.',
    url: 'https://chamillionremodeling.com',
    siteName: 'Chamillion Remodeling',
    images: [
      {
        url: '/icon.png',
        alt: 'Chamillion Remodeling',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Chamillion Remodeling',
    description:
      'Professional remodeling services with clean finishes and reliable results.',
    images: ['/icon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
