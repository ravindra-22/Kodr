import React from "react";

const RestartButton = ({ onRestart }) => {
  return (
    <button
      onClick={onRestart}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      Restart Game
    </button>
  );
};

export default RestartButton;
