import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Providers from "@/features/Providers";
import { Metadata, Viewport } from "next";

const be_vietnam_pro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Cookit",
    template: "%s | Cookit",
  },
  description:
    "Connect, Share, and Explore Delicious Recipes with Cookit - The Ultimate Social Media Platform for Food Enthusiasts!",
};

export const viewport: Viewport = {
  themeColor: "#27272a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={be_vietnam_pro.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
