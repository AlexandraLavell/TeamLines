import { Card, CardContent, Typography } from "@mui/material";

export interface CardData {
  name: string;
  id: number;
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
          {card.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {card.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;