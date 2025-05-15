import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-pamomo" size={20} />
        ) : (
          <ChevronDown className="text-pamomo" size={20} />
        )}
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "How do I create a Pamomo Wallet account?",
      answer: "Creating a Pamomo Wallet account is easy! Simply visit our website at pamomo-wallet.netlify.app, click 'Sign Up', and follow the registration process. You can register with or without a physical ID card, making financial inclusion accessible for everyone."
    },
    {
      question: "Is Pamomo Wallet secure?",
      answer: "Absolutely! We use bank-level encryption and multi-factor authentication to ensure your money and personal information are always protected. Our security systems are regularly updated to stay ahead of potential threats."
    },
    {
      question: "How much does it cost to send money?",
      answer: "Sending money is completely free on our Free plan, with a transaction limit of MWK 2,000. For larger transfers, our Basic and Premium plans offer higher limits with reduced or zero transaction fees, based on your subscription level."
    },
    {
      question: "What's the difference between the subscription plans?",
      answer: "Our Free plan offers basic wallet functionality with a MWK 2,000 transaction limit. The Basic plan (MWK 1,500/month) increases this limit to MWK 100,000 and adds transaction analytics. Our Premium plan (MWK 2,500/month) removes all limits and adds auto payments, transaction scheduling, and advanced analytics."
    },
    {
      question: "How do I become a Pamomo Merchant?",
      answer: "To become a Pamomo Merchant, click the 'Become a Pamomo Merchant' button on our homepage or visit pamomo-agent.netlify.app directly and follow the registration process. You'll need to provide some basic business information and complete our verification process. Premium plan subscribers receive a free merchant account."
    },
    {
      question: "Can I use Pamomo Wallet internationally?",
      answer: "Currently, Pamomo Wallet is focused on serving Malawi, but we have plans to expand to other countries in the future. Stay tuned for updates on our international expansion."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to commonly asked questions about Pamomo Wallet
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a 
            href="mailto:innowaluza@gmail.com" 
            className="inline-block bg-pamomo text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition duration-300"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;