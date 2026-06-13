import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import Head from "next/head";

import Navbar from "@/app/layout/navbar/navbar";
import Footer from "@/app/layout/footer";
import "./globals.css";
import "./colors.css";
import { Providers } from "@/app/components/providers";
import { prefix } from "../../constants";

const robotoSlab = Roboto_Slab({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Temple of Medicine",
  description:
    "A blog page written with the purpose of sharing insight into one's own mind through the lens of depth psychology. The content varies from dream analysis, philosophical thoughts on societal problems and much more. You can also get in contact with me for dream analysis.",
  icons: {
    icon: `${prefix}/mandala.svg`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={robotoSlab.className}>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
