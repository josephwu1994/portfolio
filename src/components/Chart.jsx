import React, { Component } from 'react'
import CircularProgressBar from 'react-circular-progressbar'
import VisibilitySensor from 'react-visibility-sensor'
import { Fade } from 'react-reveal'
import styled from 'styled-components'
import 'react-circular-progressbar/dist/styles.css';

const SkillName = styled.div`
  font-family: 'Titillium Web', sans-serif;
  font-weight: 700;
  font-size: 100%;
  text-align: center;
  color: rgba(0,0,0,0.6);
`
const SkillBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 0 10px 10px;
  width: 10vw;
  height: 20vh;
`

export default class Chart extends Component {

  render() {
    return (
      <SkillBlock>
        <Fade clear>
          <SkillName>{this.props.skill}</SkillName>
        </Fade>
        <Fade bottom>
          <VisibilitySensor>
            {({isVisible}) => {
              const percentage = isVisible ? this.props.percentage: 0;
              return (
                <CircularProgressBar 
                  percentage={percentage}
                  text={`${percentage}%`}
                  initialAnimation={true}
                  styles={{
                    root : {
                      width: "90%",
                      height: "90%",
                      marginTop: '1em'
                    },
                    path: {
                      stroke: 'rgba(70, 13, 175, 0.6)',
                    },
                    trail: {
                      stroke: 'rgba(197, 197, 197, 0.8)'
                    },
                    text: {
                      fontFamily: "Titillium Web, sans-serif",
                      fontWeight: 700,
                      fontSize: "150%",
                      fill: 'rgba(19, 197, 241, 0.877)'
                    }
                  }}
                />
              )
            }}
          </VisibilitySensor>
        </Fade>
      </SkillBlock>
    )
  }
}
