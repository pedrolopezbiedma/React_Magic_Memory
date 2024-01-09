import { useCallback, useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardsImages = [
  { src: "./img/helmet.png" },
  { src: "./img/potion.png" },
  { src: "./img/ring.png" },
  { src: "./img/scroll.png" },
  { src: "./img/shield.png" },
  { src: "./img/sword.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const startGame = () => {
    const shuffledCards = [...cardsImages, ...cardsImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => {
        return { ...card, id: Math.random() * 10 };
      });

    console.log("Cards are -->", shuffledCards);
    setCards(shuffledCards);
  };

  const handleCardChoice = (card) => {
    !choiceOne ? setChoiceOne(card) : setChoiceTwo(card);
  };

  const resetTurn = useCallback(() => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(turns + 1);
  }, [turns]);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        console.log("Cards match!");
      } else {
        console.log("Cards dont match!");
      }

      resetTurn();
    }
  }, [choiceOne, choiceTwo, resetTurn]);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={startGame}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleCardChoice={handleCardChoice}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
