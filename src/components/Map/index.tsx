import React from 'react';
import { ReactComponent as TaiwanMap } from '../../assets/tw.svg';

type MapProps = {
  onHover: () => void;
  mouseOutHandler: () => void;
};

const Map: React.FC<MapProps> = (props) => {
  const { onHover, mouseOutHandler } = props;

  return <TaiwanMap onMouseEnter={onHover} onMouseOut={mouseOutHandler} />;
};

export default Map;
