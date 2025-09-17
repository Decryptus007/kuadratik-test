import Providers from "./providers";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://kuadratik-test.vercel.app"),
  title: "Kuadratik Test - E-commerce Product Listing",
  description:
    "Discover and shop for the latest products at Kuadratik Test. High-quality e-commerce platform with curated product listings.",
  keywords: "e-commerce, shopping, products, online store, Kuadratik",
  authors: [{ name: "Kuadratik Test Team" }],
  creator: "Kuadratik Test",
  publisher: "Kuadratik Test",
  openGraph: {
    title: "Kuadratik Test - E-commerce Product Listing",
    description:
      "Discover and shop for the latest products at Kuadratik Test. High-quality e-commerce platform with curated product listings.",
    url: "/",
    siteName: "Kuadratik Test",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kuadratik Test - E-commerce Product Listing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuadratik Test - E-commerce Product Listing",
    description:
      "Discover and shop for the latest products at Kuadratik Test. High-quality e-commerce platform with curated product listings.",
    images: ["/assets/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
