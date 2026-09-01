import React from 'react';
import { FaMapMarkedAlt, FaPaintBrush, FaCode, FaBug, FaRocket, FaUsers } from 'react-icons/fa';

const steps = [
  {
    id: '01',
    title: 'Plan the roadmap',
    description:
      'We agree on the feature list for the first and future releases, the timeline of their launch, and other specifications of our works during the project.',
    icon: <FaMapMarkedAlt className="text-yellow-400 text-5xl" />,
  },
  {
    id: '02',
    title: 'Design the interface',
    description:
      'We create an interface that will provide all the necessary options without looking cluttered: each detail will lead users to a desired action.',
    icon: <FaPaintBrush className="text-yellow-400 text-5xl" />,
  },
  {
    id: '03',
    title: 'Build the app',
    description:
      'App builds will be delivered to you every 2–3 weeks for feedback and approval. You can be sure you will get the app you want.',
    icon: <FaCode className="text-yellow-400 text-5xl" />,
  },
  {
    id: '04',
    title: 'Run tests',
    description:
      'Your app will be secure and fail-safe: our automated tests give an 80% speed boost, and manual testing ensures no error is left untreated.',
    icon: <FaBug className="text-yellow-400 text-5xl" />,
  },
  {
    id: '05',
    title: 'Launch the solution',
    description:
      'The app will seamlessly substitute the previous solution if needed and ensure the audience conveniently switches to the new app.',
    icon: <FaRocket className="text-yellow-400 text-5xl" />,
  },
  {
    id: '06',
    title: 'Support or move in-house',
    description:
      'We can hand over the project to your in-house team or continue to support the app.',
    icon: <FaUsers className="text-yellow-400 text-5xl" />,
  },
];

const WorkProcess = () => {
  return (
    <section className="mx-auto text-center md:mt-16 mt-9">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-600 ">How we will work on your project</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-9 mt-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="md:p-6 p-2 shadow-lg rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-purple-500 to-indigo-500 bg-opacity-10 backdrop-blur-lg hover:bg-opacity-20"
            >
              <div className="flex justify-center  mb-4">{step.icon}</div>
              <span className="text-white text-xl font-semibold">{step.id}</span>
              <h3 className="text-lg font-bold text-white mt-2">{step.title}</h3>
              <p className="text-white mt-2">{step.description}</p>
            </div>
          ))}
        </div>
    </section>
  );
};

export default WorkProcess;