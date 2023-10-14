import React, { Component } from "react";

export default class Reference extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "Sadril",
    };
    this.superheroRef = React.createRef();
    this.wonderWomanRef = React.createRef();
  }
  changeColor() {
    this.superheroRef.current.style.color = "red";
  }
  changeFontSize() {
    this.wonderWomanRef.current.style.fontSize = "4rem";
  }
  render() {
    return (
      <div>
        <h1 ref={this.superheroRef}>Lorem ipsum dolor sit amet.</h1>
        <button onClick={() => this.changeColor()}>Change color</button>
        <h1 ref={this.wonderWomanRef}>Wonder Woman</h1>
        <button onClick={() => this.changeFontSize()}>Change font size</button>
      </div>
    );
  }
}
