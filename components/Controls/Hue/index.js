import React from 'react';
import styles from './Hue.module.css';
import { COLORS } from '../../utils';

const Hue = ({ activeColor, onClick }) => (
  <div className={styles.swatches}>
    {Object.entries(COLORS).map((color) => {
      const colorItem = color[0].toLowerCase();
      if (activeColor === colorItem) {
        return (
          <span
            key={colorItem}
            data-color={colorItem}
            onClick={onClick}
            className={`${styles.swatch} ${styles[colorItem]} ${styles.active}`}
          />
        );
      }
      return (
        <span
          key={colorItem}
          data-color={colorItem}
          className={`${styles.swatch} ${styles[colorItem]}`}
          onClick={onClick}
        />
      );
    })}
  </div>
);

export default Hue;
