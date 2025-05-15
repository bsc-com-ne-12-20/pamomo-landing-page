import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div className="flex text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} fill="currentColor" size={20} />
      ))}
      {hasHalfStar && <StarHalf fill="currentColor" size={20} />}
    </div>
  );
};

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, image, quote, rating }) => {
  return (
    <div className="testimonial-card bg-gray-50 p-8 rounded-xl shadow-md">
      <div className="flex items-center mb-6">
        <img src={image} alt={name} className="w-12 h-12 rounded-full" />
        <div className="ml-4">
          <h4 className="font-bold text-gray-800">{name}</h4>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">{quote}</p>
      <div className="mt-4">
        <StarRating rating={rating} />
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Phiri",
      role: "Small Business Owner",
      image: "https://randomuser.me/api/portraits/women/62.jpg",
      quote: "Pamomo Wallet has transformed how I manage my business finances. The merchant tools are incredibly powerful and easy to use.",
      rating: 5
    },
    {
      name: "John Banda",
      role: "Freelancer",
      image: "https://randomuser.me/api/portraits/men/30.jpg",
      quote: "I love how fast and secure Pamomo is. Sending money to clients has never been easier, and the low fees are a huge plus.",
      rating: 4.5
    },
    {
      name: "Chimwemwe Mvula",
      role: "Kaunjika Online Seller",
      image: "https://randomuser.me/api/portraits/women/89.jpg",
      quote: "As a merchant, Pamomo's tools have helped me grow my online store. The analytics and reporting features are exceptional.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of users and merchants worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
              quote={testimonial.quote}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;