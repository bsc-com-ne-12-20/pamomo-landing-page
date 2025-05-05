import React from 'react';
import { Check } from 'lucide-react';

const MerchantFeature: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-100 text-pamomo">
          <Check size={16} />
        </div>
      </div>
      <div className="ml-4">
        <p className="text-lg font-medium text-gray-800">{title}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const MerchantSection: React.FC = () => {
  const features = [
    {
      title: "Accept payments easily",
      description: "Seamless integration with your existing systems."
    },
    {
      title: "Manage transactions efficiently",
      description: "Real-time tracking and reporting for all your transactions."
    },
    {
      title: "Exclusive merchant tools",
      description: "Access to special features designed just for businesses."
    }
  ];

  return (
    <section id="merchant" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/4772/4772069.png" 
              alt="Merchant Solutions" 
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Pamomo for Merchants</h2>
            <p className="text-xl text-gray-600 mb-8">
              Grow your business with our powerful merchant tools and solutions.
            </p>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <MerchantFeature
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
            
            <a 
              href="https://pamomo-agent.netlify.app" 
              className="inline-block bg-pamomo text-white px-8 py-3 rounded-full font-bold hover:bg-pamomo-dark transition duration-300"
            >
              Join as a Merchant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchantSection;