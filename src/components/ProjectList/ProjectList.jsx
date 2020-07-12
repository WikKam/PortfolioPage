import React from 'react';
import styles from './ProjectList.module.css';
import { SectionContainer, Section, ProjectCard} from '../index';
import {Link} from 'react-router-dom';

import demagogscrapper from '../../img/demagogscrapper.jpg';
import jschess from '../../img/jschess.jpg';
import coviddatatracker from '../../img/coviddatatracker.jpg';
import evolutionsimulator from '../../img/evolutionsimulator.jpg';
import autochess from '../../img/autochess.jpg';
import wdai from '../../img/WDAI.jpg';


const ProjectList = (props) => {
    const images = [
        {path: demagogscrapper,
        name: 'DemagogScrapper',
        code: 'https://github.com/WikKam/DemagogWebScraper',
        preview: 'https://wikkam.github.io/DemagogScrapperFrontend',},
        {path: jschess,
        name: 'JsChess',
        code: 'https://github.com/WikKam/JsChess',
        preview: 'https://jschess.azurewebsites.net/',},
        {path: coviddatatracker,
        name: 'Covid Data Tracker',
        code: 'https://github.com/Mexolius/DB_Project',},
        {path: evolutionsimulator,
        name: 'Evolution Simulator',
        code: 'https://github.com/WikKam/OO-Project-1',},
        {path: wdai,
        name: 'CourseWiki',
        code: 'https://github.com/WikKam/WDAI',
        preview: 'https://wikkam.github.io/WDAI/'
        },
        {path: autochess,
        name: 'Autochess (Hearthstone)',
        code: 'https://github.com/WikKam/Python-Project-AutoChess',}];
    console.log(props.match);
    console.log(images);
    const createCards = () => {
        let num = parseInt(props.match.params.num);
        let ret = [];
        for(let i = (num - 1) * 4 ; i <= (num - 1)*4 + 3; i++){
            if(images[i])
                ret.push(<ProjectCard key = {images[i].name} preview = {images[i].preview} code = {images[i].code} src = {images[i].path} style = {{}}>{images[i].name}</ProjectCard>
                );
        }
        return ret;
    }

    return(
        <SectionContainer>
              <Section color  ='white' rowStart = {1} rowEnd = {2} columnStart = {1} columnEnd = {2}>
                  <Link to = '/'>
                  <i className={["fas fa-home", styles.i].join(" ")}></i>
                  </Link>
                </Section>
                <Section color = 'white' rowStart = {1} rowEnd = {2} columnStart = {5} columnEnd = {6}>
                {parseInt(props.match.params.num) < images.length/4 &&<Link to = {`/projects/${parseInt(props.match.params.num) + 1}`}>
                <i className={["fas fa-forward", styles.i, styles.arrows].join(" ")}></i>
                </Link>}
                </Section>
                <Section color = 'white' rowStart = {1} rowEnd = {2} columnStart = {4} columnEnd = {5}>
                {parseInt(props.match.params.num) > 1 && <Link to = {`/projects/${parseInt(props.match.params.num) - 1}`}>
                <i className={["fas fa-backward", styles.i, styles.arrows].join(" ")}></i>
                </Link>}
                </Section >
                
                <Section color = '#e3e3e369' flexText rowStart = {2} rowEnd = {9} columnStart = {1} columnEnd = {7}>
                 {createCards()}
                </Section>
              </SectionContainer>
    )
}

export default ProjectList;