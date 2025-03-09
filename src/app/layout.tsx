import "../styles/globals.css";
import type { Metadata } from "next";
import { NavBar, Footer, ScrollToTop } from "@/components";

export const metadata: Metadata = {
  title: "AGDF | African Green Growth & Development Forum",
  description:
    "AGDF is an eco-development think tank committed to driving Africa’s transition to a greener economy through innovative research, capacity building, green legislation, and sustainable growth initiatives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-pop bg-black font-light antialiased`}>
        <NavBar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
