import React, { Component, Fragment } from 'react'
import { Slide, Fade } from 'react-reveal';
import { scroller, Link } from 'react-scroll';
import styled from 'styled-components'
import texture from './../45-degree-fabric-light.png'


const Background = styled.div`
  background: #0d0a30;
  background-image: url(${texture});
  height: 100vh;
  width: 100vw;
`
const ContentContainer = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const Content = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 200%;
  font-family: 'Titillium Web', sans-serif;
  justify-content: center;
`
const Name = styled.span`
  font-weight: 800;
  color: rgb(0, 212, 240);
`
const Paragraph = styled.div`
  color: rgb(173, 173, 173);
  width: 65%;
  margin: auto;
`
const Button = styled.div`
  margin-top: 1rem;
  height: 2rem ;
  font-size: 1.5rem;
  font-weight: 800;
  border-radius: 6px;
  padding: 15px 30px 15px 30px;
  color: #475472;
  border: none;
  cursor: pointer;
  transition: 0.5s;
  background-color: white;

  ${Button}:hover {
    background-color: transparent;
    color: rgb(0, 212, 240);
    border: white 1px solid;
  }
`

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Fragment>
        <Background>
        </Background>
        <ContentContainer>
          <Slide right cascade big>
            <Content>
              <div>Hello, My name is <Name>Joseph Wu.</Name></div>
              <Paragraph>I'm a <Name>fullstack software engineer</Name> passionate about giving users an immersive experience. </Paragraph>
            </Content>
          </Slide>
          <Fade bottom>
          <Link activeClass="active" to="introduction" spy={true} smooth='easeInQuad' offset={-50} duration={500}>
            <Button> 
              About Me 
            </Button>
          </Link>
          </Fade>
        </ContentContainer>
      </Fragment>
    )
  }
}
