// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {

  createArray = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  }


  render(props) {
    return ( <button onClick={this.createArray}>Button</button>)

  }

}
