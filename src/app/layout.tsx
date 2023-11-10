import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import StyledComponentsRegistry from "../../lib/AntRegistry";
const open = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "CCAP",
  description: "Explore the vibrant community of Catholic Church Annunciation Parish on Arab Road, Kubwa. Join us for events, celebrations, and spiritual gatherings as we come together in faith and fellowship.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={open.className}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}