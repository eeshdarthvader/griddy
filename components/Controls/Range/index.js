import React from 'react';

import styles from './Range.module.css';

/**
 * @TODO: Set theme purple as css variables
 */
const Range = ({
  val, onChange, min = '1', max = '100', displayUnit = '', step = 1,
}) => (
  <section className={styles.container}>
    <input
      type="range"
      min={min}
      max={max}
      value={val}
      step={step}
      className={styles.range}
      onChange={onChange}
    />
    <span className={styles.count}>{`${val}${displayUnit}`}</span>
  </section>
);

export default Range;
