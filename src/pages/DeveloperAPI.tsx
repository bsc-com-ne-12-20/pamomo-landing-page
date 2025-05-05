import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DeveloperAPI: React.FC = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Developer API</h1>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-8 text-left">
              <p className="text-yellow-700 font-medium">Coming Soon</p>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              We're working hard to build a powerful API that will allow developers to integrate Pamomo's digital wallet functionality into their own applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">What to Expect</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-pamomo mr-2">•</span>
                  <span>Secure payment processing within your apps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pamomo mr-2">•</span>
                  <span>User account integration and wallet access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pamomo mr-2">•</span>
                  <span>Transaction history and analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pamomo mr-2">•</span>
                  <span>Webhook notifications for real-time updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pamomo mr-2">•</span>
                  <span>Comprehensive documentation and code examples</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Use Cases</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-pamomo mr-2">•</span>
                  <span>E-commerce platforms for seamless checkout</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pamomo mr-2">•</span>
                  <span>Subscription-based services for recurring payments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pamomo mr-2">•</span>
                  <span>Mobile applications requiring payment functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pamomo mr-2">•</span>
                  <span>Financial tracking and budgeting applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pamomo mr-2">•</span>
                  <span>Business management systems for seamless operations</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Our Developer Preview</h2>
            <p className="text-gray-600 mb-6">
              Want to be among the first to access our API? Sign up for our developer preview and receive updates on our API development progress.
            </p>
            
            <form className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pamomo"
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-pamomo text-white rounded-lg font-medium hover:bg-blue-700 transition duration-300"
              >
                Join Waitlist
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DeveloperAPI;