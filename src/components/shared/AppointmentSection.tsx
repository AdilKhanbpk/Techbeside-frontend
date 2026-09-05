import React, { useEffect, useState, useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";

// Extend the Window interface to include Calendly
declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
      }) => void;
    };
  }
}

// Define the CommonButton component
interface CommonButtonProps {
  className: string;
  title: React.ReactNode;
  handleClick: () => void;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  className,
  title,
  handleClick,
}) => (
  <button className={className} onClick={handleClick}>
    {title}
  </button>
);

const AppointmentSection: React.FC = () => {
  const [loadCalendly, setLoadCalendly] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    window.open("https://calendly.com/contact-techbeside/30min", "_blank");
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoadCalendly(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!loadCalendly) return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/contact-techbeside/30min",
          text: "Schedule Free Strategy Call",
          color: "#6366F1",
          textColor: "#ffffff",
        });
      }
    };

    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);

      // Clean up the Calendly badge widget if it exists
      const badge = document.querySelector(".calendly-badge-widget");
      if (badge) {
        badge.parentNode?.removeChild(badge);
      }
    };
  }, [loadCalendly]);

  return (
    <div ref={containerRef} className="appointment-section">
      <CommonButton
        className="bg-[#6366F1] shadow-[0_4px_16px_-4px_#3b71ca] text-white px-3 py-1.5 h-fit md:px-4 md:py-2 rounded-full text-xs md:text-sm flex items-center gap-2"
        title={
          <>
            <FaCalendarAlt /> Book Appointment
          </>
        }
        handleClick={handleButtonClick}
      />
    </div>
  );
};

export default AppointmentSection;
