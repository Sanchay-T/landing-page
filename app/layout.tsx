import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Devonel · Operator-led AI Agents",
  description:
    "Devonel pairs operators with AI agents to deploy revenue, success, and support automations that stay accountable to KPIs.",
  metadataBase: new URL("https://devonel.ai"),
  openGraph: {
    title: "Devonel · Operator-led AI Agents",
    description:
      "Deploy voice, chat, and workflow agents with Devonel operators guiding the playbook, integrations, and compliance.",
    url: "https://devonel.ai",
    siteName: "Devonel",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devonel · Operator-led AI Agents",
    description:
      "Book a Devonel operator pod to stand up compliant AI agents across your revenue and support workflows.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
