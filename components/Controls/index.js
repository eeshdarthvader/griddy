import React from 'react';
import Draggable from 'react-draggable';

import styles from './Controls.module.css';

import Label from './Label';
import Range from './Range';
import Hue from './Hue';
import Handle from './Handle';

const Controls = () => {
    return (
        <Draggable handle=".handler">
            <div className={styles.container}>
                <section className={styles.control}>
                    <Handle />
                    <div className={styles.knob}>
                        <Label>Choose spacing</Label>
                        <Range />
                    </div>
                    <div className={styles.knob}>
                        <Label>Choose Color</Label>
                        <Hue />
                    </div>
                    <div>
                        <Label>Choose opacity</Label>
                        <Range />
                    </div>
                </section>
            </div>
        </Draggable>
    );
};

export default Controls;
