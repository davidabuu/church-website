import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import StyledComponentsRegistry from "../../lib/AntRegistry";
const open = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Church of Annunctiation Parish",
  description:
    "",
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