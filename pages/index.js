import React, { useState } from 'react';

import Canvas from '../components/Canvas';
import Controls from '../components/Controls';

const Home = () => {
  const [spacing, setSpacing] = useState(50);
  const [opacity, setOpacity] = useState(50);

  const handleSpacingChange = (e) => setSpacing(e.target.value);

  const handleOpacityChange = (e) => setOpacity(e.target.value);

  return (
    <>
      <Canvas spacing={spacing / 10} opacity={opacity} />
      <Controls
        spacing={spacing}
        opacity={opacity}
        onSpacingChange={handleSpacingChange}
        onOpacityChange={handleOpacityChange}
      />
    </>
  );
};

export default Home;
