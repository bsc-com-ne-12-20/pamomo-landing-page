import React from 'react';

// Import the dashboard image
import dashboardImage from '../components/images/dashboard.png';

const HeroSection: React.FC = () => {
  return (
    <section className="gradient-bg text-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3">The Free Digital Wallet For Everyone</h1>
            <p className="text-xl mb-6 opacity-90">Send Money Instantly, No Fees, No Hassle</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://pamomo-wallet.netlify.app" 
                className="bg-white text-pamomo px-8 py-3 rounded-full font-bold text-center hover:bg-gray-100 transition duration-300"
              >
                Get Your Free Wallet Now
              </a>
              <a 
                href="https://pamomo-agent.netlify.app/agent-application" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-center hover:bg-white hover:text-[#8928a4] transition duration-300"
              >
                Become a Pamomo Merchant
              </a>
            </div>
            <div className="mt-6 text-sm bg-white bg-opacity-20 inline-block px-4 py-2 rounded-full">
              <span className="font-semibold">✨ No registration fees</span> • <span className="font-semibold">✨ Secure</span> • <span className="font-semibold">✨ No transaction fees</span>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src={dashboardImage}
              alt="Pamomo Wallet Dashboard" 
              className="w-4/5 md:w-auto md:max-h-[30rem] max-w-lg floating shadow-lg rounded-lg object-cover transform scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;