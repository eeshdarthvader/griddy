import React from 'react';

import styles from './Handle.module.css';

const Handle = () => (
  <div className={`handler ${styles.handle}`}>
    <span className={styles.line} />
    <span className={`${styles.line} ${styles.bottom}`} />
  </div>
);

export default Handle;
