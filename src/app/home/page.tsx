import { pageMetadata } from "@/lib/metadata";
import ClientReviews from "@/components/home/ClientReviews";
import ContactForm from "@/components/home/Contactform";
import Footer from "@/components/home/Footer";
import Herosection from "@/components/home/Herosection";
import Navbar from "@/components/home/Navbar";
import ServiceSection from "@/components/home/ServiceSection";
import StatsSection from "@/components/home/StatsSection";

export const metadata = pageMetadata.home;

const Home = () => {
  return (
    <>
      <Navbar />
      <Herosection />
      <StatsSection />
      {/* <ClientReviews /> */}
      <ServiceSection />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
