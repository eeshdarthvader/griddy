import React from 'react';
import styles from './Canvas.module.css';
import { GRID_TYPES } from '../utils';

const renderGridType = (spacing, opacity, color, gridType) => {
  switch (gridType) {
    case GRID_TYPES.RECTANGLES:
      return (
        <svg width="100%" height="100%">
          <defs>
            {/* 4 dots grid */}
            <pattern
              id="four"
              width={`${spacing}mm`}
              height={`${spacing}mm`}
              patternUnits="userSpaceOnUse"
            >
              <circle fill={color} r="0.5mm" fillOpacity={`${opacity}%`} />
            </pattern>
          </defs>
          <rect id="rect" width="100vw" height="100vh" fill="url(#four)" />
        </svg>
      );
    case GRID_TYPES.LINES:
      return (
        <svg width="100%" height="100%">
          <defs>
            {/* ruled grid */}
            <pattern
              id="ruled"
              width={`${spacing}mm`}
              height={`${spacing}mm`}
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="0"
                x2="60"
                y2="0"
                stroke={color}
                strokeWidth="0.3mm"
                opacity={`${opacity}%`}
              />
            </pattern>
          </defs>
          <rect id="rect" width="100vw" height="100vh" fill="url(#ruled)" />
        </svg>
      );
    case GRID_TYPES.SQUARES:
      return (
        <svg width="100%" height="100%">
          <defs>
            {/* square grid */}
            <pattern
              id="square"
              width={`${spacing}mm`}
              height={`${spacing}mm`}
              patternUnits="userSpaceOnUse"
            >
              <path
                d={`M ${spacing * 10} 0 L 0 0 0 ${spacing * 10}`}
                fill="none"
                stroke={color}
                strokeWidth="0.3mm"
              />
            </pattern>
          </defs>
          <rect id="rect" width="100vw" height="100vh" fill="url(#square)" />
        </svg>
      );
    case GRID_TYPES.MUSIC:
      return (
        <svg width="100%" height="100%">
          <defs>
            {/* music grid */}
            <pattern id="music" width="100" height="100" patternUnits="userSpaceOnUse">
              <line
                x1="0"
                y1="0"
                x2="100"
                y2="0"
                stroke="#496180"
                strokeWidth="0.3mm"
              />
              <line
                x1="0"
                y1="12"
                x2="100"
                y2="12"
                stroke="#496180"
                strokeWidth="0.3mm"
              />
              <line
                x1="0"
                y1="24"
                x2="100"
                y2="24"
                stroke="#496180"
                strokeWidth="0.3mm"
              />
              <line
                x1="0"
                y1="36"
                x2="100"
                y2="36"
                stroke="#496180"
                strokeWidth="0.3mm"
              />
              <line
                x1="0"
                y1="48"
                x2="100"
                y2="48"
                stroke="#496180"
                strokeWidth="0.3mm"
              />
            </pattern>
          </defs>
          <rect id="rect" width="100vw" height="100vh" fill="url(#music)" />
        </svg>
      );

    case GRID_TYPES.THREE:
      return (
        <svg width="100%" height="100%">
          <defs>
            {/* 3 dots grid */}
            <pattern
              id="three"
              width="10mm"
              height="10mm"
              patternUnits="userSpaceOnUse"
            >
              <circle fill="#496180" cx="5mm" cy="5mm" r="0.3mm" />
              <circle fill="#496180" cx="10mm" cy="10mm" r="0.6mm" />
            </pattern>
          </defs>
          <rect id="rect" width="100vw" height="100vh" fill="url(#three)" />
        </svg>
      );
    default:
      return (
        <svg width="100%" height="100%">
          <defs>
            {/* 4 dots grid */}
            <pattern
              id="four"
              width={`${spacing}mm`}
              height={`${spacing}mm`}
              patternUnits="userSpaceOnUse"
            >
              <circle fill={color} r="0.5mm" fillOpacity={`${opacity}%`} />
            </pattern>
          </defs>
          <rect id="rect" width="100vw" height="100vh" fill="url(#four)" />
        </svg>
      );
  }
};

const Canvas = ({
  spacing, opacity, color, gridType,
}) => (
  <div className={styles.canvas}>{renderGridType(spacing, opacity, color, gridType)}</div>
);

export default Canvas;
