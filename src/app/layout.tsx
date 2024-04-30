import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Head from "next/head";

import Navbar from "@/app/layout/navbar/navbar";
import "./globals.css";
import { Providers } from "@/app/components/providers";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Temple of Medicine",
  description:
    "A blog page written with the purpose of sharing insight into one's own mind through the lens of depth psychology. The content varies from dream analysis, philosophical thoughts on societal problems and much more. You can also get in contact with me for dream analysis.",
  icons: {
    icon: "/leaf.png"
  }
  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`dark ${montserrat.className}`}>
        <Providers>
          <Navbar />

          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
