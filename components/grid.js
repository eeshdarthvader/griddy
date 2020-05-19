import React, { useEffect, useState } from 'react';

const Grid = ({ distance, unit, colour, height, type, width }) => {
    const [grid, setGrid] = useState('');

    useEffect(() => {
        drawFourDots(distance, unit, colour);
    }, []);

    useEffect(() => {
        switch (type) {
            case 'fourDots':
                setGrid(drawFourDots(distance, unit, colour));
                break;
            default:
                setGrid(drawThreeDots(distance, unit, colour));
                break;
        }
    }, [type, distance]);

    const drawFourDots = (distance, unit, colour) => {
        return (
            'data:image/svg+xml;charset=UTF-8,' +
            window.encodeURIComponent(
                '<svg width="' +
                    distance +
                    unit +
                    '" height="' +
                    distance +
                    unit +
                    '" viewPort="0 0 5mm 5mm" xmlns="http://www.w3.org/2000/svg"><circle cx="4mm" cy="4mm" r="0.3mm" fill="' +
                    colour +
                    '"/></svg>'
            )
        );
    };

    const drawThreeDots = (distance, unit, colour) => {
        const distanceMM = unit === 'mm' ? distance : distance / 0.03937;
        return (
            'data:image/svg+xml;charset=UTF-8,' +
            window.encodeURIComponent(
                '<svg width="' +
                    distanceMM +
                    'mm" height="' +
                    distanceMM * 1.73 +
                    'mm" viewPort="0 0 5mm 5mm" xmlns="http://www.w3.org/2000/svg"> <circle cx="' +
                    (distanceMM / 2 - 1) +
                    'mm" cy="' +
                    ((distanceMM * 1.73) / 2 - 1) +
                    'mm" r="0.3mm" fill="' +
                    colour +
                    '"/> <circle cx="' +
                    (distanceMM - 1) +
                    'mm" cy="' +
                    (distanceMM * 1.73 - 1) +
                    'mm" r="0.3mm" fill="' +
                    colour +
                    '"/> </svg>'
            )
        );
    };

    const sx = {
        width: width,
        height: height,
        position: 'absolute',
        top: -10,
        left: '20%',
        backgroundImage: 'url(' + grid + ')',
        backgroundPosition: '2px 2px'
    };
    return <div style={sx} />;
};

export default Grid;
