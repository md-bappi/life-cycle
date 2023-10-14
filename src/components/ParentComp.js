import React, { Component } from "react";
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";

export default class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 10,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        number: 20,
      });
    }, 1000);
  }
  render() {
    console.log("parent component");
    return (
      <div>
        <h1>Parent component</h1>
        <RegularComp number={this.state.number} />
        <PureComp number={this.state.number} />
      </div>
    );
  }
}
