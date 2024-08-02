import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Providers } from './component/mobile/provider';
import "./globals.css";

config.autoAddCss = false;

const urbanist = Urbanist({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "RentByk",
  description: "RentByk app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={urbanist.className}>
      <Providers >
            {children}
        </Providers>    
      </body>
    </html>
    
  );
}
