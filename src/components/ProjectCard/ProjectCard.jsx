import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = (props) => {

    const pickStyle = () => {
        return props.preview ? styles.left : styles.center;
    }
    return(
        <div className = {styles.wrapper} style = {props.style}>
            <img alt = '' src = {props.src}></img>
            <div className={styles.overlay}></div>
            <div className={[styles.button, pickStyle()].join(" ")}><a  rel='noopener noreferrer' href={props.code} target = "_blank"> Code </a></div>
            {props.preview && <div className={[styles.button, styles.right].join(" ")}><a rel='noopener noreferrer' href={props.preview} target = "_blank"> Preview </a></div>}

            <div className = {styles.footer}>
                {props.children}
            </div>
        </div>
    )
}

export default ProjectCard;