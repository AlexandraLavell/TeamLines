import { CardData } from "./PlayerCard";
import PositionCarousel from "./PositionCarousel";


const cards: CardData[] = [
  {
    playerName: "Card 1",
    playerNumber: 1,
    description: "This is card 1.",
  },
  {
    playerName: "Card 2",
    playerNumber: 2,
    description: "This is card 2.",
  },
  {
    playerName: "Card 3",
    playerNumber: 3,
    description: "This is card 3.",
  },
];


const Game = () => {  
  return <PositionCarousel cards={cards} />;
};

export default Game;
