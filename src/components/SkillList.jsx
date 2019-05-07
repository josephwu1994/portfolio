import React, { Component } from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit'
import './styles/skillListStyles.css'

const listData = [0, 1, 2, 3, 4, 5, 6, 7];
const colors = ["#ff4f66", "#7971ea", "#5900d8"];
// we'll iterate over this array to create groups of 3 components
const baseArray = [...Array(3).keys()];

const shouldFlip = index => (prev, current) =>
  index === prev || index === current;

const ListItem = ({ index, color, onClick }) => {
  return (
    <Flipped
      flipId={`listItem-${index}`}
      stagger="card"
      shouldInvert={shouldFlip(index)}
    >
      <div
        className="listItem"
        style={{ backgroundColor: color }}
        onClick={() => onClick(index)}
      >
        <Flipped inverseFlipId={`listItem-${index}`}>
          <div className="listItemContent">
            <Flipped
              flipId={`avatar-${index}`}
              stagger="card-content"
              shouldFlip={shouldFlip(index)}
            >
              <div className="avatar" />
            </Flipped>
            <div className="description">
              {baseArray.map(i => (
                <Flipped
                  flipId={`description-${index}-${i}`}
                  stagger="card-content"
                  shouldFlip={shouldFlip(index)}
                >
                  <div />
                </Flipped>
              ))}
            </div>
          </div>
        </Flipped>
      </div>
    </Flipped>
  );
};

const ExpandedListItem = ({ index, color, onClick }) => {
  return (
    <Flipped
      flipId={`listItem-${index}`}
      stagger="card"
      onStart={el => {
        setTimeout(() => {
          el.classList.add("animated-in");
        }, 400);
      }}
    >
      <div
        className="expandedListItem"
        style={{ backgroundColor: color }}
        onClick={() => onClick(index)}
      >
        <Flipped inverseFlipId={`listItem-${index}`}>
          <div className="expandedListItemContent">
            <Flipped flipId={`avatar-${index}`} stagger="card-content">
              <div className="avatar avatarExpanded" />
            </Flipped>
            <div className="description">
              {baseArray.map(i => (
                <Flipped
                  flipId={`description-${index}-${i}`}
                  stagger="card-content"
                >
                  <div />
                </Flipped>
              ))}
            </div>
            <div className="additional-content">
              {baseArray.map(i => <div />)}
            </div>
          </div>
        </Flipped>
      </div>
    </Flipped>
  );
};

export default class AnimatedList extends Component {
  state = { focused: null };
  onClick = index =>
    this.setState({
      focused: this.state.focused === index ? null : index
  });

  render() {
    return (
      <Flipper
        flipKey={this.state.focused}
        className="staggered-list-content"
        spring="gentle"
        staggerConfig={{
          card: {
            reverse: this.state.focused !== null,
            speed: 0.5
          }
        }}
        decisionData={this.state.focused}
      >
        <ul className="list">
          {listData.map(index => {
            return (
              <li>
                {index === this.state.focused ? (
                  <ExpandedListItem
                    index={this.state.focused}
                    color={colors[this.state.focused % colors.length]}
                    onClick={this.onClick}
                  />
                ) : (
                  <ListItem
                    index={index}
                    key={index}
                    color={colors[index % colors.length]}
                    onClick={this.onClick}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </Flipper>
    );
  }
}

