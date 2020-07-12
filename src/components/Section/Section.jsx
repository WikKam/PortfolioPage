import React from 'react';
import styles from './Section.module.css';

const Section = (props) => {

    const createStyle = () => {
        return{
            gridColumnStart: props.columnStart,
            gridColumnEnd: props.columnEnd,
            gridRowStart: props.rowStart,
            gridRowEnd: props.rowEnd,
            backgroundColor: props.color,
        } 
    }

    return(
        <div className = {styles.container} style= {createStyle()}>
            <div style = {props.style} className = {[props.left ? styles.left : props.right ? styles.right : '',styles.text, props.flexText ? styles.flexText : ''].join(' ')}>
            {props.title && <h3 style = {{marginBottom:'2%', marginTop: 0}}>{props.title}</h3>}
            {props.children}
            </div>
        </div>
    )
}

export default Section;