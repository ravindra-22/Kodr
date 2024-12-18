import React from "react";

const Card = ({ cricketer }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg  overflow-hidden">
      <img
        src={cricketer.image}
        alt="{cricketer.name}"
        class="w-full h-48 object-cover "
      />
      <div class="p-4">
        <h3 class="text-lg font-bold text-gray-800">{cricketer.name}</h3>
        <p class="text-sm text-gray-600">
          <strong>Role:</strong> {cricketer.role}
        </p>
        <p class="text-gray-700 mt-2">{cricketer.description}</p>
      </div>
    </div>
  );
};

export default Card;
