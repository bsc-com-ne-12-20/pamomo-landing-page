import React from 'react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({ number, title, description, isLast = false }) => {
  return (
    <div className="step-card text-center relative">
      <div className="w-20 h-20 bg-pamomo rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
        <span className="text-white text-2xl font-bold">{number}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Sign Up",
      description: "Download the app and create your account in minutes with just your email and phone number."
    },
    {
      number: 2,
      title: "Verify Your Identity",
      description: "Complete our quick verification process to unlock all features and higher transaction limits."
    },
    {
      number: 3,
      title: "Start Transacting",
      description: "Add money to your wallet and start sending, receiving, and managing your funds seamlessly."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How Pamomo Wallet Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in just a few simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Step
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;