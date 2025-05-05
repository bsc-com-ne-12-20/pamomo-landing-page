import React from 'react';
import { LockIcon, ArrowLeftRight, CreditCard, CalendarClock } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="feature-card bg-white p-8 rounded-xl shadow-lg transition duration-300">
      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <LockIcon className="text-pamomo text-2xl" />,
      title: "Secure Transactions",
      description: "Bank-level encryption and multi-factor authentication to keep your money safe."
    },
    {
      icon: <ArrowLeftRight className="text-pamomo text-2xl" />,
      title: "Free Money Transfers",
      description: "Send and receive money at no cost, even on our free plan. No transaction fees!"
    },
    {
      icon: <CreditCard className="text-pamomo text-2xl" />,
      title: "Inclusive ID Verification",
      description: "Register with or without a physical ID card, boosting financial inclusion for everyone."
    },
    {
      icon: <CalendarClock className="text-pamomo text-2xl" />,
      title: "Autopayments",
      description: "Set up recurring payments and never miss a bill. Schedule transfers on your terms."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for secure and convenient digital transactions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;