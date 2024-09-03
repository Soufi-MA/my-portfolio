import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/ui/Navbar";
import { getDictionary } from "./dictionaries";
export const metadata: Metadata = {
  title: "Soufi Portfolio",
  description: "A Full Stack Developer",
};

const ibm = IBM_Plex_Sans_Arabic({ subsets: ["arabic"], weight: "500" });

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: "en" | "ar" };
}>) {
  const dict = await getDictionary(params.lang);
  return (
    <html
      lang={params.lang}
      dir={params.lang === "ar" ? "rtl" : "ltr"}
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body className={cn(ibm.className, "flex flex-col")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar dict={dict} lang={params.lang} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
