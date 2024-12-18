import React, { useState, useEffect } from "react";

// Import Images
import faceLoud from "./assets/images/faceLoud.jpg";
import handClap from "./assets/images/handClap.jpg";
import heart from "./assets/images/heart.jpg";
import moon from "./assets/images/moon.jpg";
import pencil from "./assets/images/pencil.jpg";
import star from "./assets/images/star.jpg";

const images = [faceLoud, handClap, heart, moon, pencil, star];

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [stats, setStats] = useState({
    moves: 0,
    points: 0,
    accuracy: 0,
  });

  const initializeGame = () => {
    const shuffledImages = [...images, ...images]
      .sort(() => Math.random() - 2)
      .map((image, index) => ({
        id: index,
        image,
        flipped: false,
        matched: false,
      }));
    setCards(shuffledImages);
    setFlippedCards([]);
    setMatchedCards([]);
    setStats({ moves: 0, points: 0, accuracy: 0 });
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || cards[index].flipped) return;

    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setStats((prev) => ({ ...prev, moves: prev.moves + 1 }));
      checkMatch(newFlippedCards, newCards);
    }
  };

  const checkMatch = (flipped, newCards) => {
    const [first, second] = flipped;
    if (newCards[first].image === newCards[second].image) {
      setMatchedCards((prev) => [...prev, first, second]);
      setStats((prev) => ({
        ...prev,
        points: prev.points + 1,
        accuracy: Math.round(((prev.points + 1) / (prev.moves + 1)) * 100),
      }));
    } else {
      setTimeout(() => {
        const resetCards = [...newCards];
        resetCards[first].flipped = false;
        resetCards[second].flipped = false;
        setCards(resetCards);
      }, 1000);
    }
    setFlippedCards([]);
  };

  return (
    <div className="min-h-screen bg-gray-400 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold text-center mb-6">MEMORY GAME</h1>
      <div className="grid grid-cols-4 gap-2 mb-6">
        {cards.map((card, index) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(index)}
            className={`h-24 w-24 flex items-center justify-center border-2 border-gray-700 cursor-pointer ${
              card.flipped || matchedCards.includes(index) ? "bg-white" : "bg-black"
            }`}
          >
            {card.flipped || matchedCards.includes(index) ? (
              <img src={card.image} alt="Card" className="h-full w-full" />
            ) : (
              <span className="text-white text-3xl font-bold">H</span>
            )}
          </div>
        ))}
      </div>
      <div className="w-full bg-white rounded-lg shadow-md p-4 max-w-4xl">
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
        <button
          onClick={initializeGame}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Restart Game
        </button>
      </div>
    </div>
  );
};

export default MemoryGame;
