import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Work_Sans } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
const workSans = Work_Sans({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "BVP-ISTE",
  description:
    "BVP-ISTE: BVP - Indian Society for Technical Education. Since its founding in 2011 at Bharati Vidyapeeth's College of Engineering, the BVP ISTE Student Chapter has developed into a vibrant hub where creative innovation and technical brilliance thrive together. As our campus's premier chapter of the Indian Society for Technical Education, we've established an environment that uses hands-on education to turn ambitious students into professionals prepared for the workforce.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {" "}
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className={`${workSans.className} flex-1`}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
