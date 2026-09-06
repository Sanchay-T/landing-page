import type { Metadata } from "next";
import { fontVariables } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.devonel.com"),
  title: "Devonel - AI product studio and growth partner for owner-led brands",
  description:
    "Devonel builds and runs the software owner-led brands sell with. Sixteen days from brief to a product your customers use. Paid discovery, fixed scope, no forms.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
