import { useState } from "react";
import "./App.css";

const fixCards = [
  { src: "./public/img/helmet.png" },
  { src: "./public/img/potion.png" },
  { src: "./public/img/ring.png" },
  { src: "./public/img/scroll.png" },
  { src: "./public/img/shield.png" },
  { src: "./public/img/sword.png" },
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
    </div>
  );
}

export default App;
