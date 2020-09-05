import React from 'react';
import PropTypes from 'prop-types';

import styles from './Label.module.css'

const Label = ({children}) => {
  return (
    <h6 className={styles.label}>
      {children}
    </h6>
  );
}

Label.propTypes = {
  children: PropTypes.node.isRequired
}

export default Label;