import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PlayerCard, { CardData } from "./PlayerCard";
import { Grid } from "@mui/material";

export interface PositionData {
  name: string;
  id: number;
  description: string;
  cards: CardData[];
}

interface PositionCarouselProps {
  position: PositionData;
}

const PositionCarousel: React.FC<PositionCarouselProps> = ({ position }) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
   
  };

  return (
    <Grid item height={'200px'}>
    <Slider {...settings} >
      {position.cards.map((card) => (
        <PlayerCard card={card} />
      ))}
    </Slider></Grid>
  );
};

export default PositionCarousel;
