import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PlayerCard, { CardData } from "./PlayerCard";


interface PositionCarouselProps {
  cards: CardData[];
}

const PositionCarousel: React.FC<PositionCarouselProps> = ({ cards }) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {cards.map((card) => (
        <PlayerCard card={card} />
      ))}
    </Slider>
  );
};

export default PositionCarousel;
