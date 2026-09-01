import Link from "next/link";
import React from "react";

interface Feature {
  icon: JSX.Element;
  text: string;
}

interface FeaturesListProps {
  title: string;
  features: Feature[];
}

const FeaturesList: React.FC<FeaturesListProps> = ({ title, features }) => {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold md:mt-24 text-[#9A00FF] mt-9">{title}</h2>
      <div className="flex md:flex-row flex-col gap-3 md:gap-7 mt-6">
        {features.map((feature, index) => (
          <div key={index} className="border-r xl:pr-3">
            {feature.icon}
            <p className="text-gray-700 text-sm md:text-base xl:text-lg mt-2">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesList;
