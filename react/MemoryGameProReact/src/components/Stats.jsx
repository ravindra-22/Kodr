import React from "react";

const Stats = ({ stats }) => {
  return (
    <div className="flex justify-around text-center mb-4">
      <div>
        <p className="text-2xl font-bold">{stats.moves}</p>
        <p className="text-sm uppercase text-gray-500">Moves</p>
      </div>
      <div>
        <p className="text-2xl font-bold">{stats.points}</p>
        <p className="text-sm uppercase text-gray-500">Points</p>
      </div>
      <div>
        <p className="text-2xl font-bold">{stats.accuracy}%</p>
        <p className="text-sm uppercase text-gray-500">Accuracy</p>
      </div>
    </div>
  );
};

export default Stats;
