import React from 'react';

import styles from './Handle.module.css'

const Handle = () => {
    return (
        <div className={styles.handle}>
            <span className={styles.line} />
            <span className={`${styles.line} ${styles.bottom}`} />
        </div>
    );
};

export default Handle;