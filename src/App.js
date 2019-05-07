import React, { Component } from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './App.css';

import Home from './views/Home';
import Introduction from './views/Introduction';
// import SkillList from './components/SkillList';



class App extends Component {

  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <div className="App">
        <Element name="home">
          <Home scroller={this.scrollToIntroduction} />
        </Element>
        <Element name="introduction">
          <Introduction />
        </Element>
      </div>
    );
  }
}

export default App;
