import React from 'react';
import './App.css';
import {Photo, SectionContainer, ContactList, PersonalInfo, Section, Button, ProjectList} from './components/index';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router basename = {process.env.PUBLIC_URL || ''}>
      <div className="App">
        <div className = 'wrapper'>
          <div className = 'left'>
            <Photo src = {'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}></Photo>
            <ContactList/>
            <PersonalInfo/>
          </div>
          <div className = 'right'>
          <Switch>
            <Route exact path="/">
              <SectionContainer>
              <Section color = {'#d3d3d369'} right title = {'About'} rowStart = {1} rowEnd = {5} columnStart = {1} columnEnd = {5}>
              {"Hello! I'm a begginer in software development, craving for increasing his current skill. My daily routine consist mainly of coding, looking at funny memes on the internet and, of course, eating. I made this page to share a few projects i made, so if you like any of these and you are willing to hire me, I would be very pleased and I look forward to any feedback <3"} 
              </Section>
              <Section color = {'#acc0b669'} left title = {'Technologies'} rowStart = {6} rowEnd = {9} columnStart = {3} columnEnd = {6}>
                My favourite language is Javascript, I focus on learning Nodejs and React, but I'm also coding in more object-oriented languages such as Java (Spring boot). I am also interested in learning Python in the future. 
              </Section>
              <Section style ={{display: 'block', margin: 'auto'}} color = {'#6f8f9669'} rowStart = {6} rowEnd = {8} columnStart = {1} columnEnd = {2}>
                <Button to = '/projects/1'>
                    PROJECTS
                </Button>
            </Section>
              </SectionContainer>
            </Route>
            <Route path = '/projects/:num' component = {ProjectList}>
            </Route>
          </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
