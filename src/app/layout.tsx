import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ClientProviders from "./ClientProviders";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-input-2/lib/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TechBeside - Software Development & Digital Marketing Agency",
  description:
    "With TechBeside, you can get the marketing and development solutions you need to grow your company. Compete in your market now.",
  metadataBase: new URL("https://www.TechBeside.co"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="AVdrxyNjezX0QpeAA-BxrpT19BFeEwwfp5Tof-aLtsY"
        />
      </head>
      <body className={`antialiased ${poppins.className}`}>
        <ClientProviders poppinsClass={poppins.className}>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
