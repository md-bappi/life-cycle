import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Tumpa",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Tanisha",
      });
    }, 1000);
  }
  render() {
    console.log("Parent");
    return (
      <div>
        <Child firstName={this.state.name} />
      </div>
    );
  }
}
