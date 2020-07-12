import React from 'react';
import styles from './SectionContainer.module.css';
const SectionContainer = (props) => {
    return(
        <div className = {styles.container}>
            {props.children}
        </div>
    )
}

export default SectionContainer;