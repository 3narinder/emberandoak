import type { Metadata } from "next";
import { Oswald, Onest } from "next/font/google";
import "./globals.css";

import Footer from "@/components/layout/Footer";
import IntroShutter from "@/components/layout/IntroShutter";
import NavBar from "@/components/layout/NavBar";
import { RouteRevealDelayProvider } from "@/components/animation/RouteRevealDelayProvider";
import { businessInfo } from "@/constants/data/reusable";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
});

export const metadata: Metadata = {
  title: {
    default: `${businessInfo.pageTitle} | ${businessInfo.name}`,
    template: `%s | ${businessInfo.name}`,
  },
  description: businessInfo.pageDescription,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${oswald.variable} ${onest.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if (window.location.pathname === "/" && !sessionStorage.getItem("ember-and-oak-home-shutter-played")) {
              document.documentElement.dataset.introShutter = "active";
              sessionStorage.setItem("ember-and-oak-home-shutter-played", "true");
            }`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <RouteRevealDelayProvider>
          <IntroShutter />
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </RouteRevealDelayProvider>
      </body>
    </html>
  );
}
