import React from 'react';
import Draggable from 'react-draggable';
import styles from './Controls.module.css';
import Label from './Label';
import Range from './Range';
import Hue from './Hue';
import Handle from './Handle';

const Controls = ({
  spacing, opacity, color, onSpacingChange, onOpacityChange, onColorChange,
}) => (
  <Draggable handle=".handler">
    <div className={styles.container}>
      <section className={styles.control}>
        <Handle />
        <div className={styles.knob}>
          <Label>Choose spacing</Label>
          <Range
            val={spacing}
            min="2"
            max="10"
            displayUnit="mm"
            step={0.1}
            onChange={onSpacingChange}
          />
        </div>
        <div className={styles.knob}>
          <Label>Choose Color</Label>
          <Hue activeColor={color} onClick={onColorChange} />
        </div>
        <div>
          <Label>Choose opacity</Label>
          <Range
            val={opacity}
            min="20"
            max="100"
            displayUnit="%"
            onChange={onOpacityChange}
          />
        </div>
      </section>
    </div>
  </Draggable>
);

export default Controls;
