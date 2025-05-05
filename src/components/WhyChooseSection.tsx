import React from 'react';
import { BadgePlus, PiggyBank, Users } from 'lucide-react';

const BenefitCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-50 p-8 rounded-xl shadow-md flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-pamomo rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyChooseSection: React.FC = () => {
  const benefits = [
    {
      icon: <Users className="text-white text-2xl" />,
      title: "Financial Inclusion",
      description: "We allow registration with or without physical IDs, ensuring everyone has access to financial services."
    },
    {
      icon: <PiggyBank className="text-white text-2xl" />,
      title: "Subscription Model",
      description: "Our subscription-based pricing saves you money compared to per-transaction fee models."
    },
    {
      icon: <BadgePlus className="text-white text-2xl" />,
      title: "Free Transfers",
      description: "Send money at no extra cost, even on our free plan. No hidden fees or charges."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Pamomo?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our unique approach to digital finance makes money management better for everyone
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;