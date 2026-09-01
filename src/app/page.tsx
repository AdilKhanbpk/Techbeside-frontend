import { pageMetadata } from "@/lib/metadata";
import dynamic from "next/dynamic";
import Slider from "@/components/landingPage/HeroSection";
import Companies from "@/components/landingPage/Companies";
import ServicesSection from "@/components/landingPage/ServicesSection";
import Script from "next/script";

const Technologies = dynamic(() => import("@/components/landingPage/Technologies"));
const WorkProcess = dynamic(() => import("@/components/landingPage/WorkProcess"));
const OurValues = dynamic(() => import("@/components/landingPage/OurValues"));
const ProjectsCount = dynamic(() => import("@/components/landingPage/ProjectsCount"));
const Products = dynamic(() => import("@/components/landingPage/Products"));
const OurTeam = dynamic(() => import("@/components/about/OurTeam"));
const Benefits = dynamic(() => import("@/components/landingPage/Benefits"));
const IndustriesSection = dynamic(() => import("@/components/landingPage/IndustriesSection"));
const ClientReviews = dynamic(() => import("@/components/landingPage/ClientReviews"));
const ClientTestimonialsSection = dynamic(() => import("@/components/landingPage/ClientTestimonialsSection"));
const FaqSection = dynamic(() => import("@/components/services/FaqSection"));
const GetQoute = dynamic(() => import("@/components/landingPage/GetQoute"));

export const metadata = pageMetadata.home;

export default function Page() {

  const homePageFaqs = [
    {
      question: "What if the software has bugs or doesn't work properly?",
      answer: "We provide free bug fixing and support for 6 months to ensure your software runs smoothly."
    },
    {
      question: "Will my software be scalable if my business grows 10x in the next few years?",
      answer: "Absolutely! We build software with scalability in mind, ensuring smooth performance as your business expands."
    },
    {
      question: "How do I know if my investment in custom software will give me a strong ROI?",
      answer: "We design solutions that streamline your operations, cut costs, and maximize revenue—so your investment pays for itself quickly."
    },
    {
      question: "Is the development process transparent?",
      answer: "Absolutely! We provide weekly progress reports and real-time updates so you can always track the project's progress."
    },
    {
      question: "Why is there no fixed pricing on the website?",
      answer: "Our pricing depends on your project requirements, complexity, and features. We offer tailored solutions instead of one-size-fits-all pricing."
    },
    {
      question: "How can I be sure that my competitors aren’t using better technology than me?",
      answer: "We stay ahead of industry trends and offer future-proof technologies to keep you competitive and innovative."
    },
    {
      question: "What if I have no technical knowledge? How will I manage my software?",
      answer: "No worries! We build user-friendly solutions and provide training so you can manage everything effortlessly, even without a tech background."
    },
    {
      question: "I need my software fast. How quickly can you deliver?",
      answer: "We offer optimized development timelines and phased deliveries, ensuring you get a functional version as early as possible."
    },
    {
      question: "Why should I trust your company instead of hiring a freelancer?",
      answer: "Unlike freelancers, we offer a full team of experts, long-term support, scalability, and a structured process for reliable results."
    },
    {
      question: "How do I get started? What’s the first step?",
      answer: "Getting started is easy! Just **fill out our contact form**, and we’ll schedule a free consultation to understand your needs and discuss the best strategy for your project."
    },
  ];



  return (
    <>
      {/* Schema 1: Corporation – entity knowledge panel */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Corporation",
            name: "TechCreator",
            alternateName: "Techcreator",
            url: "https://www.techcreator.co/",
            logo: "https://www.techcreator.co/assets/icons/Logo.png",
            founder: {
              "@type": "Person",
              name: "Saud Khan",
              sameAs: [
                "https://www.linkedin.com/in/saudkhan39",
                "https://github.com/saudkhanbpk/",
                "https://gitlab.com/saudkhanbpk",
                "https://www.behance.net/saudkhan39"
              ]
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+92 311 9265290",
              contactType: "customer service",
              contactOption: "TollFree",
              areaServed: ["US", "GB", "CA"],
              availableLanguage: "en",
            },
            sameAs: [
              "https://www.facebook.com/techcreatorfb/",
              "https://www.linkedin.com/company/techcreator",
              "https://www.youtube.com/@techcreator9512",
              "https://www.instagram.com/techcreatorco/",
              "https://twitter.com/techcreatorco",
              "https://www.tiktok.com/@techcreator.co"
            ],
          }),
        }}
      />

      {/* Schema 2: FAQ – enables expandable FAQ rich results in Google Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: homePageFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer.replace(/\*\*/g, ""), // strip markdown bold
              },
            })),
          }),
        }}
      />

      {/* Schema 3: WebSite – enables Sitelinks Searchbox in Google Search results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "TechCreator",
            url: "https://www.techcreator.co/",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://www.techcreator.co/search?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

{/* <!-- Google tag (gtag.js) --> */}
<Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-940020951"
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-940020951');
        `}
</Script>

      <Slider />
      <div className="max-w-[1450px] mx-auto  px-4 ">
        <Companies />
      </div>
      <div className="max-w-[1450px] mx-auto px-4 md:mt-16 mt-9">
        <ServicesSection />
        <Technologies />
        <WorkProcess />
        <OurValues />
        <div className="md:mt-16 mt-9">
          <ProjectsCount />
        </div>
        <Products />
        <OurTeam />
        <Benefits />
        { /* <PlatformInfo /> */}
        <IndustriesSection />
        <ClientReviews />
        <ClientTestimonialsSection />
        <FaqSection title="Frequently Asked Questions" faqs={homePageFaqs} />
        <GetQoute />
      </div>
    </>
  );
}
