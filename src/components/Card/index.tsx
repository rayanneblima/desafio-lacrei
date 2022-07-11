import React, { useEffect, useState } from 'react';
import { CardType } from '../../types/Card.types';
import Loader from '../Loader';
import { Box } from './styles';

interface Props {
  card: CardType;
}

const Card:React.FC<Props> = ({ card }) => {
  const [bgColor, setBgColor] = useState('#fff');
  const [mustShowLoader, setMustShowLoader] = useState(false);
  const [mustShowMessage, setMustShowMessage] = useState(false);

  useEffect(() => {
    setMustShowLoader(true)
    changeBgColor();
  });

  function changeBgColor () {
    setTimeout(() => {
      setMustShowLoader(false);
      setBgColor(card.color);
      setMustShowMessage(true);
    }, card.timer);
  }

  return (
    <Box
      id={`card--${card.color}`}
      borderColor={card.color}
      bgColor={bgColor}
    >
      { mustShowLoader && <Loader loader={{ color: card.color }} /> }
      { mustShowMessage && <span>Tempo de Duração: {card.timer}</span> }
    </Box>
  )
}

export default Card;