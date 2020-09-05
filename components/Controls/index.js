import React from 'react';
import styles from './Controls.module.css'

import Label from '../Label'
import Range from '../Range'

const Controls = () => {
  return (
    <section className={styles.control}>
      <Label>Choose spacing</Label>
      <Range />
    </section>
  );
}

export default Controls;