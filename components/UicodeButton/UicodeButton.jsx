import React from 'react';
import styles from './UicodeButton.module.scss';

const UicodeButton = ({ label, handleClick }) => (
    <button
        className={styles.button}
        onClick={handleClick}
    >
        {label}
    </button>
);

export default UicodeButton;