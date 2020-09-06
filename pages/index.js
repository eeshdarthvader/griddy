import React, { useRef } from 'react';

import Canvas from '../components/Canvas';
import Controls from '../components/Controls';


const Home = () => {
    const constraintsRef = useRef(null);

    return (
        <>
            <Canvas constraints={constraintsRef} />
            <Controls constraints={constraintsRef} />
        </>
    );
};

export default Home;
