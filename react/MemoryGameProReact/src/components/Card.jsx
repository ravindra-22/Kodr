import React from "react";

const Card = ({ card, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`h-24 w-24 flex items-center justify-center border-2 border-gray-700 cursor-pointer ${
        card.flipped || card.matched ? "bg-white" : "bg-black"
      }`}
    >
      {card.flipped || card.matched ? (
        <img src={card.image} alt="Card" className="h-full w-full" />
      ) : (
        <span className="text-white text-3xl font-bold">H</span>
      )}
    </div>
  );
};

export default Card;
