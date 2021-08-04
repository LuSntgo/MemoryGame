import React from "react";
import "./App.css";

//data
import allCards from "./data";
//utils
import { shuffle } from "./utils";
//Components
import Card from "./Components/Card"; 

//CSS
import ".App.css"; 

const App = () => {
  const [cards, setCards] = useState(shuffle([...allCards, ...allCards]));
const cardsGrid = cards.map((card, idx) =>(
  <Card key={`${card.id}-${idx}`} card={card}/>
));

  return (
    <div className="App border my-5">
    <div className="container">
      <div className="row">
      <div className="col-9">
      <div className="row border"> {cardsGrid}</div>
        
      </div>
      </div>
      </div>
      </div>
  );
};

export default App;
