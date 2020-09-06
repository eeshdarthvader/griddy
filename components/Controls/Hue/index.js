import React from 'react';

import styles from './Hue.module.css';

const Hue = () => {
    return (
        <div className={styles.swatches}>
            <span className={`${styles.swatch} ${styles.cyan}`} />
            <span className={`${styles.swatch} ${styles.magenta} ${styles.active}`} />
            <span className={`${styles.swatch} ${styles.yellow}`} />
            <span className={`${styles.swatch} ${styles.black}`} />
        </div>
    );
};

export default Hue;
