import React from 'react';
import styles from './Canvas.module.css';

const Canvas = ({ spacing, opacity, color }) => (
  <div className={styles.canvas}>
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

        {/* 3 dots grid */}
        <pattern id="three" width="10mm" height="10mm" patternUnits="userSpaceOnUse">
          <circle fill="#496180" cx="5mm" cy="5mm" r="0.3mm" />
          <circle fill="#496180" cx="10mm" cy="10mm" r="0.6mm" />
        </pattern>

        {/* square grid */}
        <pattern id="square" width="24" height="24" patternUnits="userSpaceOnUse">
          <path
            d="M 24 0 L 0 0 0 24"
            fill="none"
            stroke="#496180"
            strokeWidth="0.6mm"
          />
        </pattern>

        {/* ruled grid */}
        <pattern id="ruled" width="24" height="24" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="24" y2="0" stroke="#496180" strokeWidth="0.3mm" />
        </pattern>

        {/* music grid */}
        <pattern id="music" width="100" height="100" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="100" y2="0" stroke="#496180" strokeWidth="0.3mm" />
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

      <rect id="rect" width="100vw" height="100vh" fill="url(#four)" />
    </svg>
  </div>
);

export default Canvas;
