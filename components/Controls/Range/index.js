import React from 'react';

import styles from './Range.module.css';

/**
 * @TODO: Set theme purple as css variables
 */
const Range = ({ val, onChange }) => (
  <section className={styles.container}>
    <input
      type="range"
      min="1"
      max="100"
      value={val}
      className={styles.range}
      onChange={onChange}
    />
    <span className={styles.count}>{val}</span>
  </section>
);

export default Range;
