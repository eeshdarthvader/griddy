import React, { useState } from 'react';
import Canvas from '../components/Canvas';
import Controls from '../components/Controls';

import { COLORS } from '../components/utils';

const Home = () => {
  const [spacing, setSpacing] = useState(50);
  const [opacity, setOpacity] = useState(50);
  const [color, setColor] = useState(COLORS.BLACK);

  const handleSpacingChange = (e) => setSpacing(e.target.value);

  const handleOpacityChange = (e) => setOpacity(e.target.value);

  const handleColorChange = (e) => setColor(e.target.dataset.color);

  return (
    <>
      <Canvas spacing={spacing / 10} opacity={opacity} color={color} />
      <Controls
        spacing={spacing}
        opacity={opacity}
        color={color}
        onSpacingChange={handleSpacingChange}
        onOpacityChange={handleOpacityChange}
        onColorChange={handleColorChange}
      />
    </>
  );
};

export default Home;
