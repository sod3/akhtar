import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";

const siteURL = process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL !== "https://example.com" ? process.env.NEXT_PUBLIC_SITE_URL : undefined;
export const metadata: Metadata = {
  metadataBase: siteURL ? new URL(siteURL) : undefined,
  title: { default: "Mudassir Akhtar — Venture Builder & Product Growth Strategist", template: "%s | Mudassir Akhtar" },
  description: "Mudassir Akhtar builds from the customer backward, connecting ventures, product strategy, growth and cross-functional teams.",
  applicationName: "Mudassir Akhtar",
  robots: { index: true, follow: true },
  openGraph: { title: "Mudassir Akhtar — Venture Builder", description: "Build from the customer backward. Venture building, product strategy and growth.", type: "website", images: ["/assets/social-card.png"] },
  twitter: { card: "summary_large_image", images: ["/assets/social-card.png"] },
  icons: { icon: "/assets/favicon.svg" }
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><ScrollProgress/><a href="#main" className="skip-link">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html>;
}
