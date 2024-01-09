import { useState } from "react";
import "./App.css";

const fixCards = [
  { src: "./img/helmet.png" },
  { src: "./img/potion.png" },
  { src: "./img/ring.png" },
  { src: "./img/scroll.png" },
  { src: "./img/shield.png" },
  { src: "./img/sword.png" },
];

function App() {
  const [turns, setTurns] = useState(0);
  const [cards, setCards] = useState([]);

  const startGame = () => {
    const shuffledCards = [...fixCards, ...fixCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => {
        return { ...card, id: Math.random() * 10 };
      });

    console.log("Cards are -->", shuffledCards);
    setCards(shuffledCards);
  };

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={startGame}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="card front" />
              <img className="back" src="./img/cover.png" alt="card back" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
