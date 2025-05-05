import React from 'react';
import { Check, X } from 'lucide-react';

interface PricingFeatureProps {
  included: boolean;
  text: string;
}

const PricingFeature: React.FC<PricingFeatureProps> = ({ included, text }) => {
  return (
    <li className="flex items-center">
      {included ? (
        <Check className="text-green-500 mr-2" size={16} />
      ) : (
        <X className="text-gray-400 mr-2" size={16} />
      )}
      <span className={included ? "text-gray-600" : "text-gray-400"}>{text}</span>
    </li>
  );
};

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  yearlyPrice?: string;
  features: { included: boolean; text: string }[];
  popular?: boolean;
  buttonText: string;
  transactionLimit: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  description, 
  price, 
  yearlyPrice,
  features, 
  popular = false, 
  buttonText,
  transactionLimit
}) => {
  return (
    <div className={`bg-white ${popular ? 'border-2 border-pamomo transform scale-105 z-10' : 'border border-gray-200'} rounded-xl shadow-sm overflow-hidden transition duration-300 hover:shadow-lg`}>
      {popular && (
        <div className="bg-pamomo text-white py-2 text-center">
          <span className="text-sm font-bold">MOST POPULAR</span>
        </div>
      )}
      <div className="p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-2">
          <span className="text-sm font-medium text-gray-500">Transaction Limit: {transactionLimit}</span>
        </div>
        <div className="flex flex-col items-center mb-6">
          <div className="flex justify-center items-baseline">
            <span className="text-3xl font-bold text-gray-800">{price}</span>
            <span className="text-gray-600">/month</span>
          </div>
          {yearlyPrice && (
            <div className="text-sm text-gray-500 mt-1">
              or {yearlyPrice}/year (Save 16%)
            </div>
          )}
        </div>
        <a 
          href="https://pamomo-wallet.netlify.app" 
          className={`block w-full ${popular ? 'bg-pamomo text-white hover:bg-pamomo-dark' : 'bg-gray-100 text-pamomo hover:bg-gray-200'} font-bold py-3 px-4 rounded-lg transition duration-300`}
        >
          {buttonText}
        </a>
      </div>
      <div className="border-t border-gray-200">
        <div className="p-8">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <PricingFeature 
                key={index} 
                included={feature.included} 
                text={feature.text} 
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      title: "Free",
      description: "Perfect for getting started",
      price: "MWK 0",
      transactionLimit: "MWK 2,000 per transaction",
      buttonText: "Get Started",
      features: [
        { included: true, text: "Basic wallet functions" },
        { included: true, text: "Money transfers" },
        { included: true, text: "Standard support" },
        { included: false, text: "Transaction analytics" },
        { included: false, text: "Auto payments" },
        { included: false, text: "Transaction scheduling" }
      ]
    },
    {
      title: "Basic",
      description: "Great for regular users",
      price: "MWK 1,500",
      yearlyPrice: "MWK 15,000",
      transactionLimit: "MWK 100,000 per transaction",
      buttonText: "Upgrade Now",
      popular: true,
      features: [
        { included: true, text: "All Free features" },
        { included: true, text: "Transaction insights" },
        { included: true, text: "Priority customer support" },
        { included: true, text: "Reduced transaction fees" },
        { included: false, text: "Auto payments feature" },
        { included: false, text: "Transaction scheduling" }
      ]
    },
    {
      title: "Premium",
      description: "For power users & businesses",
      price: "MWK 2,500",
      yearlyPrice: "MWK 25,000",
      transactionLimit: "Unlimited",
      buttonText: "Get Premium",
      features: [
        { included: true, text: "All Basic features" },
        { included: true, text: "Auto payments" },
        { included: true, text: "Transaction scheduling" },
        { included: true, text: "Advanced analytics" },
        { included: true, text: "Free agent account" },
        { included: true, text: "No transaction fees" }
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs with no hidden fees
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              yearlyPrice={plan.yearlyPrice}
              transactionLimit={plan.transactionLimit}
              features={plan.features}
              popular={plan.popular}
              buttonText={plan.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;