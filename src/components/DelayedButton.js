// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {

  // coordinateArray = (e) => {
  //   this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  // }

  buttonClick = (e) => {
    e.persist();

    setTimeout(() => {
        this.props.onDelayedClick(e);
      }, this.props.delay);

  }


  render(prop) {
    return ( <button onClick={this.buttonClick}>Button</button>)

  }

}
