import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="gradient-bg text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Pamomo Wallet?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of happy users who are managing their money smarter with Pamomo.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="https://pamomo-wallet.netlify.app" 
            className="bg-white text-pamomo px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300"
          >
            Get Pamomo Wallet
          </a>
          <a 
            href="https://pamomo-agent.netlify.app" 
            className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-pamomo transition duration-300"
          >
            Become a Merchant
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;