import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import ScrollProgress from "@/components/ScrollProgress";
import Loader from "@/components/Loader";
import Particles from "@/components/Particles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nadha-portfolio.example.com"),
  title: "Nadha Saafiya | Portfolio - Developer & Designer",
  description: "Portfolio of Nadha Saafiya. A final-year IT student, UI/UX Designer, Full Stack Developer, and AI Enthusiast designing experiences, building solutions, and driving innovation.",
  keywords: [
    "Nadha Saafiya",
    "Portfolio",
    "UI/UX Designer",
    "Full Stack Developer",
    "Data Analyst",
    "AI Enthusiast",
    "React Developer",
    "Next.js Portfolio",
    "India",
  ],
  authors: [{ name: "Nadha Saafiya" }],
  openGraph: {
    title: "Nadha Saafiya | Portfolio - Developer & Designer",
    description: "I design intuitive digital experiences, build scalable full-stack applications, and leverage AI and data to solve real-world problems.",
    url: "https://nadha-portfolio.example.com",
    siteName: "Nadha Saafiya Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nadha Saafiya Portfolio Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadha Saafiya | Portfolio - Developer & Designer",
    description: "I design intuitive digital experiences, build scalable full-stack applications, and leverage AI and data to solve real-world problems.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#030303",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bg-theme text-text-theme min-h-screen selection:bg-accent-blue/30 selection:text-white flex flex-col`}
      >
        <ThemeProvider>
          {/* Scroll progress bar */}
          <ScrollProgress />

          {/* Custom Initial Loader */}
          <Loader />

          {/* Canvas particle background */}
          <Particles />

          {/* Global Navbar */}
          <Navbar />

          {/* Main content body with header spacer */}
          <div className="flex-1 flex flex-col relative z-10">
            {children}
          </div>

          {/* Global Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
