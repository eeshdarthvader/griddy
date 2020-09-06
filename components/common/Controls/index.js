import React from 'react';
import styles from './Controls.module.css';

import Label from '../Label';
import Range from '../Range';
import Hue from '../Hue';

const Controls = () => {
    return (
        <section className={styles.control}>
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
    );
};

export default Controls;
