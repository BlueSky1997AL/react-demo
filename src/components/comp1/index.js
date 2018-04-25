import React from 'react';
import './index.css';

export default class Comp1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Allen',
      age: '21',
      gender: 'male'
    }
  }


  render() {
    return (
      <div id="comp1-root">
        <div id="name">Hello! {this.state.name}</div>
        <div id="age">Your are {this.state.age} years old</div>
        <div id="gender">You are {this.state.gender}</div>
      </div>
    );
  }

}