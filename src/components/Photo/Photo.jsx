import React from 'react';
import styles from './Photo.module.css';

const Photo = (props) => {



    return(
        <div className = {styles.wrapper}>
        <div className = {styles.upper}></div>
        <div className = {styles.imageHolder}>
            <div className = {styles.imgBg}></div>
            <img className = {styles.image} alt ='' src = {props.src}></img>
        </div>
        <div className = {styles.lower}></div>
        <div id = {'name'} className = {styles.name}>
            Wiktor Kamiński
            </div>
        <span style = {{borderBottom: '2px solid lightgrey'}}>Personal Website</span>
        </div>
    )
}

export default Photo;