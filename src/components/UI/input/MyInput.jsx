import React from 'react';
import styles from './MyInput.module.css';

const MyInput = ({placeholder, value, setValue}) => {
    return (
            <input type="text" className={styles.MyInput} placeholder={placeholder} value={value} onChange={(e) => {setValue(e.target.value)}} />
    );
};

export default MyInput;