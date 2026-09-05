import React from "react";
import { servicesMetadata } from "@/lib/metadata";
import ClientTestimonialsSection from "@/components/landingPage/ClientTestimonialsSection";
import FaqSection from "@/components/services/FaqSection";
import ClientReviews from "@/components/landingPage/ClientReviews";
import OurTeam from "@/components/about/OurTeam";
import Herosection from "@/components/services/Herosection";
import FeatureSection from "@/components/services/FeatureSection";
import FeaturesList from "@/components/services/FeaturesList";
import DiagonalFeatureSection from "@/components/services/DiagonalFeatureSection";
import FramedFeatureSection from "@/components/services/FramedFeatureSection";
import RelatedServices from "@/components/services/RelatedServices";
import Link from "next/link";
import Image from "next/image";
// import SaaSStickyCta from "@/components/services/SaaSStickyCta";

// Importing Icons
import { Rocket, Zap, Users, BarChart3 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Image Imports - Dedicated SaaS Product Images
import saasHeroImage from "../../../../public/assets/servicespages/saas-hero.webp";
import saasFeatureFastImg from "../../../../public/assets/servicespages/saasImg.webp";
import saasStrategyImg from "../../../../public/assets/servicespages/saas-strategy.webp";
import saasDesignDevImg from "../../../../public/assets/servicespages/saas-design-dev.webp";
import saasLaunchGrowthImg from "../../../../public/assets/servicespages/saas-launch-growth.webp";
import saasFramedImg from "../../../../public/assets/servicespages/saas-framed-feature.webp";
// import saasDashboardImg from "../../../../public/assets/servicespages/saas-dashboard.png";

// Import Portfolio/Industry Images for Real Case Studies & Portfolio Links
import healthcareImg from "../../../../public/assets/portfoliopage/healthcare.webp";
import restaurantImg from "../../../../public/assets/portfoliopage/restaurant.webp";
import realstateImg from "../../../../public/assets/portfoliopage/realstate.webp";
import ecommerceImg from "../../../../public/assets/portfoliopage/eccommerce.webp";
import hospitalityImg from "../../../../public/assets/portfoliopage/hospitality.webp";
import greenEnergyImg from "../../../../public/assets/portfoliopage/greenenergy.webp";

// Related Services Images
import webDesignImage from "../../../../public/assets/relatedServices/Frame 7 (2).png";
import illustrationDesignImage from "../../../../public/assets/relatedServices/Frame 7 (4).png";
import motionDesignImage from "../../../../public/assets/relatedServices/Frame 7 (5).png";

const SaasMvpDevelopment = () => {
  const categorySlug = "saas-mvp-development";

  const saasMvpFaqs = [
    {
      question: "How long does it take to build an MVP?",
      answer: "Usually 30–45 days depending on complexity. We focus strictly on core features to get you to market and validate your idea fast."
    },
    {
      question: "Do you work with startups?",
      answer: "Yes, we specialize in startups and early-stage founders, designing for rapid launches, clean budgets, and flexibility."
    },
    {
      question: "Can you scale the product later?",
      answer: "Yes, we build with scalability in mind from day one. Our modular architecture (modern frontend, backend frameworks, and standard databases) supports growth without major rewrites."
    },
    {
      question: "Do you provide support after launch?",
      answer: "Yes, we offer ongoing maintenance, performance optimization, cloud deployment support, and feature additions."
    },
    {
      question: "Who owns the code and intellectual property?",
      answer: "You own 100% of the code, designs, and intellectual property. We push everything directly to your private GitHub repository."
    }
  ];

  const features = [
    { icon: <Rocket className="w-6 h-6 text-pink-500" />, text: "Fast launch in 30-45 days with lean, focused development on core features." },
    { icon: <Zap className="w-6 h-6 text-indigo-500" />, text: "Scalable architecture built for growth from day one without technical debt." },
    { icon: <Users className="w-6 h-6 text-yellow-500" />, text: "User-focused design that converts visitors into users with intuitive interfaces." },
    { icon: <BarChart3 className="w-6 h-6 text-blue-500" />, text: "SEO-ready foundation for organic growth and digital marketing from launch." },
  ];

  const sections = [
    {
      image: saasStrategyImg,
      alt: "Strategy and MVP Planning",
      title: "Strategy & MVP Planning - Get to Market Faster",
      content:
        "We start by defining your MVP scope, roadmap, and launch timeline. Together, we identify your core value proposition and the minimum features needed to validate your idea with real users. This lean approach ensures you launch quickly, gather feedback, and pivot confidently. No unnecessary complexity—just what your users actually need.",
    },
    {
      image: saasDesignDevImg,
      alt: "Design and Development",
      title: "Design & Development - Modern Architecture for SaaS",
      content: (
        <>
          Our expert team builds your SaaS product using industry-leading technologies: {" "}
          <Link href="/services/web-development" className="text-blue-600 font-semibold hover:underline">modern frontend frameworks</Link>,{" "}
          <Link href="/services/web-development" className="text-blue-600 font-semibold hover:underline">scalable backend systems</Link>, {" "}
          <Link href="/services/web-development" className="text-blue-600 font-semibold hover:underline">API integrations</Link>, and {" "}
          <Link href="/e-commerce" className="text-blue-600 font-semibold hover:underline">cloud deployment</Link>. {" "}
          We design clean, modern interfaces and build robust systems that scale. Every feature is crafted with both user experience and technical excellence in mind.
        </>
      )
    },
    {
      image: saasLaunchGrowthImg,
      alt: "Launch and Growth Support",
      title: "Launch & Growth Support - Ready to Scale",
      content:
        "After launch, we provide comprehensive support: performance optimization, feature additions, user feedback integration, and scaling infrastructure as you grow. We ensure your product stays reliable, secure, and competitive as you acquire users and expand your feature set. Your success is our success.",
    },
  ];

  const relatedServices = [
    {
      title: "Web Application Development",
      description: "Full-stack web apps built for performance and scalability.",
      icon: webDesignImage,
      link: "/services/web-development",
    },
    {
      title: "UI/UX Design for SaaS",
      description: "User-centered design that drives adoption and retention.",
      icon: motionDesignImage,
      link: "/services/ui-ux-design-agency",
    },
    {
      title: "DevOps & Deployment",
      description: "Infrastructure setup, CI/CD, and reliable deployment.",
      icon: illustrationDesignImage,
      link: "/services/devops",
    },
  ];

  // const realCaseStudies = [
  //   {
  //     client: "HealthLink SaaS",
  //     badge: "Healthcare & Scheduling",
  //     goal: "Launch a secure telemedicine and appointment booking portal in 35 days.",
  //     challenge: "Strict HIPAA security constraints and instant synchronizations across multiple medical calendars.",
  //     result: "Delivered in 30 days. Onboarded 500+ doctors in the first month and helped raise $1.2M seed funding.",
  //     tech: "Modern Web Stack, Cloud Hosting, Messaging API",
  //     image: healthcareImg,
  //     link: "/healthcare"
  //   },
  //   {
  //     client: "FinAnalytics Hub",
  //     badge: "Fintech Dashboard",
  //     goal: "Consolidate global sales terminal datasets into an instant payment analytics dashboard.",
  //     challenge: "Aggregating asynchronous webhooks and rendering hundreds of chart parameters dynamically.",
  //     result: "MVP live in 40 days. Processed $100K+ transaction volume in the initial 2 weeks of launching.",
  //     tech: "Frontend Framework, Custom Backend, Analytics APIs",
  //     image: saasDashboardImg,
  //     link: "/e-commerce"
  //   },
  //   {
  //     client: "PropMatch CRM",
  //     badge: "Real Estate Matchmaking",
  //     goal: "Connect home buyers with off-market regional brokers using automated matching rules.",
  //     challenge: "Optimizing geolocation search queries and managing automated email updates.",
  //     result: "MVP launched in 45 days. Successfully triggered 1,200+ property matches within week 3.",
  //     tech: "Web Application Stack, Relational Database, Map & Email APIs",
  //     image: realstateImg,
  //     link: "/real-estate"
  //   }
  // ];

  const portfolioVerticals = [
    { title: "Healthcare Systems", img: healthcareImg, link: "/healthcare", desc: "Telemedicine portals & patient engines" },
    { title: "E-Commerce Integrations", img: ecommerceImg, link: "/e-commerce", desc: "Custom checkout subscription engines" },
    { title: "Real Estate Platforms", img: realstateImg, link: "/real-estate", desc: "Broker portals and property locators" },
    { title: "Restaurant Applications", img: restaurantImg, link: "/restaurants", desc: "Online food ordering & digital dashboards" },
    { title: "Hospitality Management", img: hospitalityImg, link: "/hospitality", desc: "Interactive hotel booking software" },
    { title: "Green Energy Dashboards", img: greenEnergyImg, link: "/green-energy", desc: "Solar panel output tracking panels" }
  ];

  return (
    <>
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.TechBeside.co/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "SaaS MVP Development",
                item: "https://www.TechBeside.co/services/saas-mvp-development",
              },
            ],
          }),
        }}
      />

      {/* Main Hero Section */}
      <Herosection
        title={
          <>
            <span className="text-indigo-500">SaaS</span> MVP Development - Launch Your Product in 30-45 Days
          </>
        }
        description={
          <>
            Turn your SaaS idea into a scalable, market-ready product faster. At TechBeside, we specialize in rapid MVP development for startups and founders who want to validate their idea, gather real user feedback, and start generating revenue—without wasting months or burning budget. We&apos;ve helped dozens of founders go from concept to live product in under 6 weeks, with{" "}
            <Link href="/services/ui-ux-design-agency" className="text-blue-600 font-semibold hover:underline">clean design</Link>,{" "}
            <Link href="/services/web-development" className="text-blue-600 font-semibold hover:underline">scalable architecture</Link>, {" "}
            <Link href="/services/seo-services-for-small-business" className="text-blue-600 font-semibold hover:underline">SEO optimization</Link>, and production-ready code.
          </>
        }
        image={saasHeroImage}
      />

      <div className="max-w-[1450px] mx-auto md:mt-16 mt-9 px-4">

        {/* Top CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-2xl p-8 md:p-12 mb-16 text-center relative overflow-hidden shadow-lg border border-indigo-500/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Launch Your SaaS MVP?</h2>
          <p className="text-lg mb-8 text-indigo-100 max-w-2xl mx-auto font-light">
            Book a free strategy call to discuss your idea, timeline, and budget. Get a clear scope mapping session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://calendly.com/contact-TechBeside/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition shadow-md flex items-center justify-center gap-2"
            >
              📅 Book Strategy Call
            </a>
            <a
              href="https://wa.me/923178261618"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-500 text-[#fff] px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition shadow-md flex items-center justify-center gap-2"
            >
              <FaWhatsapp size={20} />
              Quick Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Real SaaS Showcase Screenshot Container */}

        {/* Feature Section - Built for Founders */}
        <FeatureSection
          title="Built for Founders Who Want to Move Fast"
          description={
            <>
              Most startups fail because they spend too much time building and not enough time launching. We flip that script. Our SaaS MVP development process focuses on getting your core product to market quickly, with just the right features to validate your idea. From there, you gather real user feedback, start acquiring customers, and grow confidently. We handle the technical heavy lifting so you can focus on your business.{" "}

            </>
          }
          image={saasFeatureFastImg}
        />

        {/* What You Get */}
        <FeaturesList title="What You Get" features={features} />

        {/* Proven Process */}
        <div className="my-16 bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200/50 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Our Proven SaaS MVP Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center relative">
              <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-md">1</div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Strategy & Planning</h3>
              <p className="text-gray-600 text-sm">We define your MVP scope, roadmap milestones, and budget.</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-md">2</div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Design & Development</h3>
              <p className="text-gray-600 text-sm">We build your SaaS using modern web technologies and secure APIs.</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-md">3</div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Testing & Optimization</h3>
              <p className="text-gray-600 text-sm">We check cross-device performance, security, and loading speeds.</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-md">4</div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Launch & Support</h3>
              <p className="text-gray-600 text-sm">We deploy your product to cloud hosting and handle immediate post-launch support.</p>
            </div>
          </div>
        </div>

        {/* Diagonal Feature Section */}
        <DiagonalFeatureSection sections={sections} />

        {/* Portfolio Links (Showcasing Industry Solutions) */}
        <div className="my-16 bg-gray-50 border border-gray-200/50 rounded-2xl p-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl font-extrabold text-gray-800">Industry Solutions Portfolio</h2>
            <p className="text-gray-600 mt-2">Explore our extensive work and solutions in key industry channels.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioVerticals.map((v, i) => (
              <Link
                key={i}
                href={v.link}
                className="group bg-white border border-gray-100 p-4 rounded-xl shadow-sm hover:border-indigo-300 transition duration-300 flex flex-col"
              >
                <div className="h-32 rounded-lg overflow-hidden relative mb-3">
                  <Image src={v.img} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <h4 className="font-bold text-gray-900 group-hover:text-indigo-600 transition duration-300">{v.title}</h4>
                <p className="text-gray-500 text-xs mt-1 leading-relaxed">{v.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Flexible Pricing Section */}
        <div className="my-16 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-2xl p-8 md:p-12 border border-indigo-200/40">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-indigo-900">Flexible MVP Pricing</h2>
          <p className="text-center text-indigo-700 mb-8 text-lg">We offer flexible packages based on your scope and complexity.</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-indigo-100 transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <h3 className="text-xl font-bold text-indigo-700 mb-4">Basic MVP</h3>
              <p className="text-3xl font-bold mb-2 text-gray-900">$2,000 - $3,500</p>
              <p className="text-gray-600 mb-6">Perfect for validating your core idea</p>
              <ul className="space-y-2 text-sm text-gray-700 border-t border-gray-100 pt-4">
                <li>✅ Core features only</li>
                <li>✅ Basic UI/UX</li>
                <li>✅ Single payment integration</li>
                <li>✅ 30 days post-launch support</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-indigo-600 relative overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg absolute top-0 right-0">Most Popular</div>
              <h3 className="text-xl font-bold text-indigo-700 mb-4">Standard MVP</h3>
              <p className="text-3xl font-bold mb-2 text-gray-900">$3,500 - $6,000</p>
              <p className="text-gray-600 mb-6">Best for most startups</p>
              <ul className="space-y-2 text-sm text-gray-700 border-t border-gray-100 pt-4">
                <li>✅ Full-stack development</li>
                <li>✅ Professional UI/UX design</li>
                <li>✅ Multi-payment integrations</li>
                <li>✅ API integrations (auth, email, etc.)</li>
                <li>✅ SEO optimization</li>
                <li>✅ 60 days post-launch support</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-indigo-100 transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <h3 className="text-xl font-bold text-indigo-700 mb-4">Advanced MVP</h3>
              <p className="text-3xl font-bold mb-2 text-gray-900">$6,000 - $8,000+</p>
              <p className="text-gray-600 mb-6">For complex features</p>
              <ul className="space-y-2 text-sm text-gray-700 border-t border-gray-100 pt-4">
                <li>✅ All Standard MVP features</li>
                <li>✅ Advanced API integrations</li>
                <li>✅ Admin dashboard</li>
                <li>✅ Real-time features</li>
                <li>✅ Analytics & reporting</li>
                <li>✅ 90 days post-launch support</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-indigo-800 mb-4">Not sure what package fits your requirements? Let&apos;s map it out.</p>
            <a
              href="https://calendly.com/contact-TechBeside/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition shadow-md"
            >
              Get Custom Quote estimate
            </a>
          </div>
        </div>

        {/* Framed Feature Section */}
        <FramedFeatureSection
          image={saasFramedImg}
          alt="SaaS MVP Development Feature illustration"
          title="Comprehensive Support from Concept to Scale"
          content={
            <>
              Our commitment doesn&apos;t end at launch. We provide comprehensive MVP development services with continuous post-launch support to ensure your product succeeds. Whether you need performance optimization, feature additions, user analytics integration, or scaling infrastructure, we&apos;re here to help. We understand startup challenges and provide flexible support packages that grow with your business. Your success is our success—let&apos;s build something amazing together.
            </>
          }
        />

        {/* Middle CTA Section */}
        <div className="bg-indigo-600 text-white rounded-2xl p-8 md:p-12 my-16 text-center shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 opacity-40 pointer-events-none" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">From Idea to Live Product in 30-45 Days</h2>
          <p className="text-lg mb-8 text-indigo-100 max-w-2xl mx-auto font-light">
            Don&apos;t let perfect be the enemy of done. Launch your MVP, onboard early customers, and start gathering user feedback today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://calendly.com/contact-TechBeside/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition shadow-md flex items-center justify-center gap-2"
            >
              📅 Book Strategy Call
            </a>
            <a
              href="https://wa.me/923178261618"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition shadow-md flex items-center justify-center gap-2"
            >
              <FaWhatsapp size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Related Projects, FAQs, Team */}
        <FaqSection title="Frequently Asked Questions" faqs={saasMvpFaqs} />
        <OurTeam />
        <RelatedServices services={relatedServices} />

        {/* Reviews and Testimonials */}
        <div className="bg-indigo-600 md:mt-16 mt-9 md:mb-16 mb-9 rounded-2xl overflow-hidden py-6">
          <ClientReviews />
          <ClientTestimonialsSection />
        </div>

        {/* Bottom CTA & Inline Calendly Embed */}
        {/* <div id="book-call-bottom" className="my-16 border-t border-gray-200 pt-16 scroll-mt-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">🤝 Let&apos;s Build Your SaaS MVP</h2>
            <p className="text-gray-600 mt-2 leading-relaxed">Select an active time slot below to map out your MVP features, tech stack, and roadmap estimates.</p>
          </div>
          <div className="relative max-w-4xl mx-auto bg-white rounded-2xl border border-gray-200 p-2 shadow-2xl overflow-hidden">
            <iframe
              src="https://calendly.com/contact-TechBeside/30min?embed_domain=TechBeside.co&embed_type=Inline"
              width="100%"
              height="700px"
              className="border-none rounded-xl bg-white"
              title="Book Your Free Strategy Call"
            />
          </div>
        </div> */}

      </div>

      {/* Floating Sticky CTA Badge */}
      {/* <SaaSStickyCta /> */}
    </>
  );
};

export default SaasMvpDevelopment;

export const metadata = servicesMetadata.saasMvp;
