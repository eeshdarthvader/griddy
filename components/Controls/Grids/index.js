import React from 'react';
import styles from './Grids.module.css';
import { GRIDS_NAMES, GRID_TYPES } from '../../utils';

const Grids = ({ activeGridType, onClick }) => {
  const handleClick = (name) => {
    onClick(name);
  };

  return (
    <div className={styles.gridTypesContainer}>
      {/* eslint-disable-next-line array-callback-return */}
      {GRIDS_NAMES.map((name) => {
        switch (name) {
          case GRID_TYPES.RECTANGLES:
            return (
              <span
                className={`${styles.boxes} ${
                  activeGridType === name ? styles.active : ''
                }`}
                data-grid={name}
                key={name}
                onClick={() => handleClick(name)}
              >
                <span className={styles.ellipses1} />
                <span className={styles.ellipses2} />
                <span className={styles.ellipses3} />
                <span className={styles.ellipses4} />
              </span>
            );
          case GRID_TYPES.LINES:
            return (
              <span
                className={`${styles.boxes} ${
                  activeGridType === name ? styles.active : ''
                }`}
                data-grid={name}
                key={name}
                onClick={() => handleClick(name)}
              >
                <span className={styles.line1} />
                <span className={styles.line2} />
              </span>
            );
          case GRID_TYPES.SQUARES:
            return (
              <span
                className={`${styles.boxes} ${
                  activeGridType === name ? styles.active : ''
                }`}
                data-grid={name}
                key={name}
                onClick={() => handleClick(name)}
              >
                <span className={styles.verticalLine1} />
                <span className={styles.verticalLine2} />
                <span className={styles.horizontalLine3} />
                <span className={styles.horizontalLine4} />
              </span>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Grids;
