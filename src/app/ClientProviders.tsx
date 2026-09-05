"use client";
import { useEffect, useState } from "react";
import Script from "next/script";
import Layout from "../newLayout";
import { FaWhatsapp } from "react-icons/fa";
import * as Sentry from "@sentry/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Sentry Initialization
Sentry.init({
  dsn: "https://9d42fdd8329487e9dedc9b6bb7f46e6d@o4508575425036288.ingest.us.sentry.io/4508579252666368",
  integrations: [],
});

// Google Analytics Config Function
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

interface ClientProvidersProps {
  children: React.ReactNode;
  poppinsClass: string;
}

export default function ClientProviders({ children, poppinsClass }: ClientProvidersProps) {
  const pathname = usePathname();
  const [loadThirdParty, setLoadThirdParty] = useState(false);

  useEffect(() => {
    // Apply or remove Poppins font based on route
    const body = document.body;
    if (pathname.startsWith("/blog/")) {
      body.classList.remove(poppinsClass);
    } else {
      body.classList.add(poppinsClass);
    }
  }, [pathname, poppinsClass]);

  useEffect(() => {
    // Set up Google Analytics tracking
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("config", "G-PHQXJH3N0Z", {
        page_path: window.location.pathname + window.location.search,
      });
    }
  }, []);

  useEffect(() => {
    const handleInteraction = () => {
      setLoadThirdParty(true);
      removeEventListeners();
    };

    const removeEventListeners = () => {
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };

    window.addEventListener("mousemove", handleInteraction, { passive: true });
    window.addEventListener("scroll", handleInteraction, { passive: true });
    window.addEventListener("keydown", handleInteraction, { passive: true });
    window.addEventListener("touchstart", handleInteraction, { passive: true });

    // Fallback load after 4 seconds to ensure analytics capture long sessions
    const timer = setTimeout(() => {
      setLoadThirdParty(true);
      removeEventListeners();
    }, 4000);

    return () => {
      removeEventListeners();
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* Google Analytics, GTM, Google Ads (only loaded after interaction or timeout) */}
      {loadThirdParty && (
        <>
          {/* Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-PHQXJH3N0Z"
            strategy="lazyOnload"
          />
          <Script id="google-analytics" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PHQXJH3N0Z', { 'anonymize_ip': true });
            `}
          </Script>

          {/* Google Tag Manager */}
          <Script
            id="google-tag-manager"
            strategy="lazyOnload"
          >
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MSPBKQM2');
            `}
          </Script>

          {/* Google Ads Conversion Tracking */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=AW-11493765407"
            strategy="lazyOnload"
          />
          <Script id="google-ads" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11493765407');
            `}
          </Script>

          {/* Google Tag Manager (noscript fallback) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-MSPBKQM2"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        </>
      )}

      {/* Layout Wrapper */}
      <Layout>{children}</Layout>

      {/* WhatsApp Floating Button */}
      <Link
        href="https://wa.me/923178261618"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-3 p-3 animate-bounce hover:animate-none bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 z-50"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={40} />
      </Link>
    </>
  );
}
