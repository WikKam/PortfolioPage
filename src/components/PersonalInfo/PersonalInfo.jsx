import React from 'react'
import styles from './PersonalInfo.module.css';

const PersonalInfo = (props) => {
    return (
        <div className = {styles.wrapper}>
            <div className = {styles.location}>
            <i className= {["fas fa-map-marker-alt", styles.i].join(" ")}></i>Kraków
            </div>
            <div className = {styles.school}>
            <i className={["fas fa-university", styles.i].join(" ")}></i>Computer Science at <a href = 'https://www.agh.edu.pl/' target = '_blank'>AGH</a> 
            </div>
        </div>
    )
}

export default PersonalInfo;