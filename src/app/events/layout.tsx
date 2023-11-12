
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
const open = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "CCAP | Events",
  description:
    "Explore the vibrant community of Catholic Church Annunciation Parish on Arab Road, Kubwa. Join us for events, celebrations, and spiritual gatherings as we come together in faith and fellowship.",
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
