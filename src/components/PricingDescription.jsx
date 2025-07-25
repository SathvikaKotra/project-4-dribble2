import React from "react";

const PricingDescription = ({ features }) => {
  return (
    <ul className="space-y-3 text-sm text-gray-300">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-cyan-400 mr-3" />
          {feature}
        </li>
      ))}
    </ul>
  );
};

export default PricingDescription;
