import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const open = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "CCAP | Login",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={open.className}>{children}</body>
    </html>
  );
}
