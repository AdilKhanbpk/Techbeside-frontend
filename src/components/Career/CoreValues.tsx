import { Sparkles, TrendingUp, Zap, Target, Users, Eye, Award, Smile } from 'lucide-react';

interface ValueCardType {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardType> = ({ icon, title, description }) => (
  <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/30 group-hover:text-indigo-300 transition-all">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const CoreValues: React.FC = () => {
  const values = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Be You",
      description: "Celebrating individuality while nurturing an environment in which everyone is heard, valued and respected."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Strive to Grow",
      description: "Become shaped through continuous evolution and exploration of ideas in ways to open the door to personal and professional development."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Push the Boundaries",
      description: "Do not believe in mediocrity but rather value the amazing ideas by which new solutions can be created."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strive to Impact",
      description: "In your unwavering conviction to make a difference, create solutions that would be most relevant to clients and the communities in which we engage."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Unite As One",
      description: "We come together, combining all that we have to reach a common target and build lasting relationships."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Be Transparent",
      description: "Open communication, clear expectations to empower trust, and honesty in everything we say and do."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Take Pride",
      description: "With every project we execute, put your heart into it and take pride in the work we accomplish."
    },
    {
      icon: <Smile className="w-6 h-6" />,
      title: "Have Fun",
      description: "Because work is more than just about doing tasks; it is about work, passion, creativity, and sharing an amazing journey with the team."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0B0B14] -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="max-w-[1450px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-indigo-400 mb-4">What Drives Us</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Throughout everything we do at TechBeside, our core values guide us. They inspire our team, shape our culture, and ensure exceptional results.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
