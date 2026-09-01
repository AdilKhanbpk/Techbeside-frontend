import Link from 'next/link';

const industries = [
  {
    title: 'Restaurant',
    description: 'Enhance dining experiences with tailored solutions for restaurant management.',
    tags: ['Order Management', 'Table Reservations', 'Kitchen Display', 'Inventory', 'CRM'],
    link: '/restaurants',
  },
  {
    title: 'E-commerce',
    description: 'Boost online sales with seamless integration and efficient e-commerce solutions.',
    tags: ['Payment Integration', 'SEO Optimization', 'Customer Analytics', 'Inventory Management'],
    link: '/e-commerce',
  },
  {
    title: 'Real Estate',
    description: 'Optimize property transactions and management with cutting-edge technology.',
    tags: ['Property Listings', 'CRM', 'Virtual Tours', 'Lease Management', 'Investment Analysis'],
    link: '/real-estate',
  },
  {
    title: 'Hospitality',
    description: 'Deliver top-tier guest experiences with user-friendly and efficient management solutions.',
    tags: ['Hotel Booking', 'Guest Relations', 'Loyalty Programs', 'Event Management'],
    link: '/hospitality',
  },
  {
    title: 'Green Energy',
    description: 'Drive sustainability with advanced energy management and monitoring solutions.',
    tags: ['Solar Energy', 'Wind Power', 'Energy Analytics', 'Smart Grids'],
    link: '/green-energy',
  },
  {
    title: 'Healthcare',
    description: 'Improve patient care and streamline healthcare operations with innovative solutions.',
    tags: ['Telemedicine', 'Electronic Prescriptions', 'Health Records', 'Remote Monitoring'],
    link: '/healthcare',
  },
];

const IndustriesSection = () => {
  return (
    <section className="md:mt-16 mt-9">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl  font-bold text-purple-600">Industries we serve</h2>
      <p className="ms:text-lg text-base text-gray-600 mt-4">
        With a wide range of services and proven experience across major industries, we understand your challenges and
        deliver tailored solutions that overcome them and drive meaningful impact.
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-9 mt-6">
      {industries.map((industry, index) => (
        <Link key={index} href={industry.link}>
         <div className="p-6 border rounded-xl shadow-sm border-gray-300 bg-gradient-to-r from-indigo-500 to-purple-500 hover:border-purple-600 hover:border-2 cursor-pointer flex flex-col justify-between hover:scale-105 transition-transform duration-300 ease-in-out">
            
              <h3 className="text-xl font-semibold mb-2 text-white">{industry.title}</h3>
              <p className="text-white mb-4">{industry.description}</p>
           
            <div className="flex flex-wrap gap-2">
              {industry.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 text-sm border rounded-full text-white">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>
  
  );
};

export default IndustriesSection;
