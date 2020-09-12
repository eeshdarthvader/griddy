import React from 'react';
import styles from './Hue.module.css';

import { COLORS } from '../../utils';

const Hue = ({ activeColor, onClick }) => (
  <div className={styles.swatches}>
    {Object.entries(COLORS).map((color) => {
      if (activeColor === color[1]) {
        return (
          <span
            key={color[1]}
            data-color={color[1]}
            onClick={onClick}
            className={`${styles.swatch} ${styles[color[1]]} ${styles.active}`}
          />
        );
      }
      return (
        <span
          key={color[1]}
          data-color={color[1]}
          className={`${styles.swatch} ${styles[color[1]]}`}
          onClick={onClick}
        />
      );
    })}
  </div>
);

export default Hue;
