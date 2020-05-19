import React, { useState } from 'react';
import Grid from '../components/grid';
import Head from 'next/head';

const Home = () => {
    const [data, setData] = useState({
        type: 'fourDotss',
        distance: 12,
        unit: 'mm',
        colour: '#d4d4d4',
        colourValue: 0,
        staffNr: 1
    });

    const [width, setWidth] = useState('100%');
    const [height, setHeight] = useState('100%');

    const sx = {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyItems: 'space-between'
    };

    const handleDistanceChange = event => {
        setData({
            ...data,
            distance: Number(event.target.value)
        });
    };

    const handleSelection = event => {
        setData({
            ...data,
            type: event.target.value
        });
    };

    return (
        <>
            <div>
                <label for="distance">Distance: </label>
                <input
                    type="number"
                    value={data.distance}
                    name="distance"
                    onChange={handleDistanceChange}
                />
            </div>
            <div>
                <label for="type">Choose a type:</label>
                <select id="type" onChange={handleSelection}>
                    <option value="fourDots">Four dots</option>
                    <option value="threeDots">Three dots</option>
                </select>
            </div>
            <div style={sx}>
                <Grid
                    distance={data.distance}
                    unit={data.unit}
                    colour={data.colour}
                    type={data.type}
                    height={height}
                    width={width}
                />
            </div>
        </>
    );
};

export default Home;
