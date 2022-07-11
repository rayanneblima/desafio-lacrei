import React, { useEffect, useState } from 'react';
import Card from './components/Card';

import './App.css';
import { CardType } from './types/Card.types';

function App() {
  const [cards, setCards] = useState<Array<CardType>>([]);
  const [error, setError] = useState<string>('');

  interface Card {
    id: number;
    color: string;
    timer: number;
  }

  function handleFetchData() {
    fetch("./data.json")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  }

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <main className="App">
      <header>
        <h1>Cards and Timer</h1>
      </header>

      <section>
        {
          cards.length
          ? cards.map((card: Card, index: number) => <Card card={card} key={index} />)
          : (
            <>
              <p>Não foi possível renderizar os cards.</p>
              { error && <p>Erro: { error }</p> }
            </>
          )
        }
      </section>
    </main>
  );
}

export default App;
