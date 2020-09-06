import React from 'react';
import { motion } from 'framer-motion';

import styles from './Controls.module.css';

import Label from './Label';
import Range from './Range';
import Hue from './Hue';

const Controls = ({ constraints }) => {
    return (
        <motion.section
            drag
            dragConstraints={constraints}
            dragElastic={0}
            className={styles.control}
        >
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
        </motion.section>
    );
};

export default Controls;
