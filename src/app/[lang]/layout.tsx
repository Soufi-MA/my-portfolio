import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Soufi Portfolio",
  description: "A Full Stack Developer",
};

const ibm = IBM_Plex_Sans_Arabic({ subsets: ["arabic"], weight: "500" });

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: "en" | "ar" };
}>) {
  return (
    <html lang={params.lang} className="scroll-smooth" suppressHydrationWarning>
      <body className={cn(ibm.className, "flex flex-col")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
