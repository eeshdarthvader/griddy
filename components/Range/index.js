import React, { useState } from 'react'

import styles from './Range.module.css'

const Range = () => {
  const [val, setVal] = useState(50)

  return (
    <section className={styles.container}>
      <input
        type="range"
        min="1"
        max="100"
        value={val}
        className={styles.range}
        onChange={e => setVal(e.target.value)}
      />

      <span className={styles.count}>
        {val}
      </span>
    </section>
  )
}

export default Range
