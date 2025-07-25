// File: src/components/PricingCard.jsx
import React from "react";
import PricingDescription from "./PricingDescription";

const PricingCard = ({ plan }) => {
  return (
    <div
      className={`relative border rounded-xl p-8 transition-all duration-300 transform
    ${
      plan.isPopular
        ? "border-cyan-500 scale-105 shadow-2xl"
        : "border-gray-700"
    }
    hover:scale-105 hover:border-cyan-500 hover:shadow-cyan-500/50 hover:shadow-2xl
    bg-gradient-to-b from-gray-800 to-gray-900`}
    >
      {plan.isPopular && (
        <span className="absolute top-4 right-4 text-xs text-cyan-400 font-semibold">
          Popular
        </span>
      )}

      <h3 className="text-xl font-semibold mb-2 text-white">{plan.name}</h3>
      <p className="text-sm text-gray-400 mb-6">{plan.description}</p>
      <p
        className={`text-3xl font-bold mb-4 ${
          plan.isPopular ? "text-cyan-400" : "text-white"
        }`}
      >
        ${plan.price}
      </p>

      <button
        className={`w-full py-2 mb-6 rounded-md font-medium ${
          plan.isPopular
            ? "bg-cyan-500 text-black hover:bg-cyan-400"
            : "bg-gray-700 text-white hover:bg-gray-600"
        }`}
      >
        Get Started
      </button>

      <PricingDescription features={plan.features} />
    </div>
  );
};

export default PricingCard;
