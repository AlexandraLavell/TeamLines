import { Grid } from "@mui/material";
import { CardData } from "./PlayerCard";
import PositionCarousel, { PositionData } from "./PositionCarousel";

const cards: CardData[] = [
  {
    name: "Card 1",
    id: 1,
    description: "This is card 1.",
  },
  {
    name: "Card 2",
    id: 2,
    description: "This is card 2.",
  },
  {
    name: "Card 3",
    id: 3,
    description: "This is card 3.",
  },
];

const positions: PositionData[] = [
  {
    name: "Position 1",
    id: 1,
    description: "This is position 1.",
    cards: cards,
  },
  {
    name: "Position 2",
    id: 2,
    description: "This is position 2.",
    cards: cards,
  },
  {
    name: "Position 3",
    id: 3,
    description: "This is position 3.",
    cards: cards,
  },
];

const Game = () => {
  return (
    <Grid display='flex' flexDirection='column' rowGap={1} height='100%' >
      {positions.map((position) => {
        return <PositionCarousel position={position} />;
      })}
    </Grid>
  );
};

export default Game;
