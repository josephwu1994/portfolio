import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Fade } from 'react-reveal';
import { Link } from 'react-scroll';

import './styles/topNavStyles.css'

export default class TopNav extends Component {
  constructor() {
    super()
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({clicked : !this.state.clicked})
  }

  render() {
    return (
      <div className="navContainer">
        <Fade left>
          <button 
            className="iconContainer"
            onClick={this.handleClick}
          >
            <FontAwesomeIcon className="menuIcon" icon={faBars} />
          </button>
        </Fade>
        <Fade left when={this.state.clicked}>
        <Link activeClass={"active"} to={"introduction"} spy={true} smooth='easeInQuad' offset={-50} duration={500}>
          <button className="navTab">About</button>
        </Link>
          <button className="navTab">Skills</button>
          <button className="navTab">Contact</button>
        </Fade>
      </div>
    )
  }
}
