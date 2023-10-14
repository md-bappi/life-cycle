import React, { Component } from "react";

export default class LifecycleMounting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "fahim",
    };
    console.log("constructor ran");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount ran");
  }
  render() {
    console.log("render ran");
    return (
      <div>
        <h1>Lifecycle Mounting</h1>
      </div>
    );
  }
}
