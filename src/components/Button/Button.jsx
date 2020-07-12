import React from 'react';
import styles from './Button.module.css';
import {Link} from 'react-router-dom'
const Button = (props) => {

    return(
        <Link to={props.to} 
        className={[styles.btn, styles.effect04].join(' ')}
        data-sm-link-text="CLICK" 
        >
        <span className = {props.className}>{props.children}</span></Link>
    )

}

export default Button;