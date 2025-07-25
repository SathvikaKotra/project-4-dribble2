// File: src/pages/Pricing.jsx
import React from "react";
import PricingCard from "../components/PricingCard";

const plans = [
  {
    name: "Basic",
    description: "For personal use and exploration of AI technology.",
    price: "0",
    isPopular: false,
    features: [
      "100 requests per day",
      "Free trial features access",
      "Limited API access",
    ],
  },
  {
    name: "Premium",
    description: "Perfect for professionals and small businesses.",
    price: "9.99",
    isPopular: true,
    features: [
      "Unlimited AI generation",
      "Full new features access",
      "Priority support",
      "Comprehensive usage data",
    ],
  },
  {
    name: "Enterprise",
    description: "Perfect for large organizations.",
    price: "18.99",
    isPopular: false,
    features: [
      "Custom deployment",
      "Comprehensive usage data",
      "Training specialized models",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-2">Choose Your Plan</h2>
        <p className="text-gray-400">
          Unlock endless possibilities with HiLa VPN
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
