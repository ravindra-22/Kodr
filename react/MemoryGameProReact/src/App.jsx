import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Stats from "./components/Stats";
import RestartButton from "./components/RestartButton";

// Import Images
import faceLoud from "./assets/images/faceLoud.jpg";
import handClap from "./assets/images/handClap.jpg";
import heart from "./assets/images/heart.jpg";
import moon from "./assets/images/moon.jpg";
import pencil from "./assets/images/pencil.jpg";
import star from "./assets/images/star.jpg";

const images = [faceLoud, handClap, heart, moon, pencil, star];

const App = () => {
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
      .sort(() => Math.random() - 0.5)
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
          <Card
            key={card.id}
            card={card}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
      <div className="w-full bg-white rounded-lg shadow-md p-4 max-w-4xl">
        <Stats stats={stats} />
        <RestartButton onRestart={initializeGame} />
      </div>
    </div>
  );
};

export default App;
