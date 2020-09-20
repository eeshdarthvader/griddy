import React, { useState } from 'react';
import Canvas from '../components/Canvas';
import Controls from '../components/Controls';
import { COLORS, GRID_TYPES } from '../components/utils';

const Home = () => {
  const [spacing, setSpacing] = useState(5);
  const [opacity, setOpacity] = useState(100);
  const [color, setColor] = useState(COLORS.BLACK);
  const [gridType, setGridType] = useState(GRID_TYPES.RECTANGLES);

  const handleSpacingChange = (e) => setSpacing(e.target.value);

  const handleOpacityChange = (e) => setOpacity(e.target.value);

  const handleColorChange = (e) => setColor(e.target.dataset.color);

  const handleGridTypeChange = (name) => setGridType(name);

  return (
    <>
      <Canvas spacing={spacing} opacity={opacity} color={color} gridType={gridType} />
      <Controls
        spacing={spacing}
        opacity={opacity}
        color={color}
        gridType={gridType}
        onSpacingChange={handleSpacingChange}
        onOpacityChange={handleOpacityChange}
        onColorChange={handleColorChange}
        onGridTypeChange={handleGridTypeChange}
      />
    </>
  );
};

export default Home;
