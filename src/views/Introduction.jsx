import React, { Component } from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
import data from './../data'
import Chart from '../components/Chart'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'

const IntroContainer = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const HeadShot = styled.img`
  width: 30vw;
  max-width: 600px;
  max-height: 600px;
  height: 45vh;
  border-radius: 45%;
  margin: 0 12rem 0 10rem;
`

const Nav = styled.div`
  width: 100vw;
  position: fixed;
  background: #0d0a30;
  height: 100px;
  display: flex;
  flex-direction: row;
`

const Title = styled.div`
  position:absolute;
  top: calc( 100vh + 8vh);
  font-size: 4em;
  font-family: 'Titillium Web', sans-serif;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.7);
`

const Content = styled.div`
  width: 40vw;
  height: 90%;
  display:flex;
  margin: auto;
  margin-top: 4em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Skills = styled.div`
  width: 40vw;
  height: 80%;
  display:flex;
  margin: 5% auto 0 auto;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const Caption = styled.div`
  margin: 3rem 0 2rem 0;
  font-size: 200%;
  color: rgba(19, 197, 241, 0.877);
  font-weight: 800;
`

const Phrase = styled.div`
  font-size: 150%;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 300;
`

const Prompt = styled.div`
  margin-top: 10px;
  font-size: 150%;
  color: rgba(19, 197, 241, 0.877);
  font-weight: 300;
`

export default class Introduction extends Component {

  render() {
    const chartArr = Object.keys(data).map(skill => {
      return <Chart key={skill} percentage={data[skill]} skill={skill} />
    })
    return (
      <IntroContainer>
        <Nav></Nav>
        <Title>ABOUT</Title>
        <Content>
          <Fade left>
            <HeadShot alt="Head Shot" src="C360_2018-05-24-15-48-19-898.jpg" />
          </Fade>
          <Fade left cascade>
            <Caption>Who?</Caption>
            <Phrase>I'm a Fullstack Software Engineer dedicated to deliver the most immersive user experience through building next generation UI.</Phrase>
            <Prompt>Let's work together!</Prompt>
          </Fade>
        </Content>
        <Skills>
          {chartArr}
        </Skills>
      </IntroContainer>
    )
  }
}

