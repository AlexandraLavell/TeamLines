import { Card, CardContent, Typography } from "@mui/material";

export interface CardData {
  playerName: string;
  playerNumber: number;
  description?: string;
  
}

interface PlayerCardProps {
    card: CardData;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ card }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {card.playerName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {card.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;