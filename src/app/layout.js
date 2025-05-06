import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const nextConfig = {
  reactStrictMode: true,
};

export const metadata = {
  title: "forest-garden.in",
  description: "Discover plots, homes, and office spaces hand-picked for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        <ToastContainer
          position="top-right"
          autoClose={3000}
          pauseOnHover
          draggable
          theme="light"
        />

        {children}
        <Footer />
      </body>
    </html>
  );
}

